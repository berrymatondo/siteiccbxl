"use client";

import { useState, useEffect } from "react";
import { Play, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/lib/auth-client";

interface VideoInfo {
  url: string;
  videoId: string;
  title: string;
  thumbnail: string;
  speaker: string;
}

export function YoutubeHeroCard() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    url: "https://www.youtube.com/watch?v=uZ-7sJb48cc",
    videoId: "uZ-7sJb48cc",
    title: "Pourquoi et comment inviter des âmes à l'église",
    thumbnail: "https://img.youtube.com/vi/uZ-7sJb48cc/maxresdefault.jpg",
    speaker: "Pst. Christian Saboukoulou",
  });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editUrl, setEditUrl] = useState("");
  const [editSpeaker, setEditSpeaker] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;
  //const { user } = session;
  //console.log("user", session?.user);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const response = await fetch("/api/video-embeds?key=hero_video");
        if (response.ok) {
          const data = await response.json();
          setVideoInfo({
            url: data.url,
            videoId: extractVideoId(data.url) || "",
            title: data.title || "Vidéo YouTube",
            thumbnail:
              data.thumbnail ||
              `https://img.youtube.com/vi/${extractVideoId(
                data.url
              )}/maxresdefault.jpg`,
            speaker: data.speaker || "Pasteur",
          });
        }
      } catch (error) {
        console.error("[v0] Erreur lors du chargement:", error);
      }
    };

    loadVideo();
  }, []);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const fetchVideoInfo = async (videoId: string) => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      );
      if (!response.ok) throw new Error("Failed to fetch video info");
      const data = await response.json();
      return {
        title: data.title,
        thumbnail:
          data.thumbnail_url ||
          `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      };
    } catch (error) {
      console.error("Error fetching video info:", error);
      return {
        title: "Vidéo YouTube",
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      };
    }
  };

  const handleEdit = () => {
    setEditUrl(videoInfo.url);
    setEditSpeaker(videoInfo.speaker);
    setIsEditOpen(true);
  };

  const handleSave = async () => {
    const videoId = extractVideoId(editUrl);
    if (!videoId) {
      alert("URL YouTube invalide");
      return;
    }

    setIsLoading(true);
    const info = await fetchVideoInfo(videoId);

    const newVideoInfo = {
      url: editUrl,
      videoId,
      title: info.title,
      thumbnail: info.thumbnail,
      speaker: editSpeaker,
    };

    try {
      await fetch("/api/video-embeds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "hero_video",
          url: editUrl,
          title: info.title,
          speaker: editSpeaker,
          thumbnail: info.thumbnail,
        }),
      });

      setVideoInfo(newVideoInfo);
      setIsEditOpen(false);
    } catch (error) {
      console.error("[v0] Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="px-2 md:px-4 mb-8 max-md:mt-4  md:mt-4">
        <div className="flex items-center justify-between mb-3 ">
          <div className="text-center mb-8 w-full">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7f20df]"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#141117] dark:text-white uppercase tracking-tight">
                Dernier Message
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7f20df]"></div>
            </div>
          </div>
          {user && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEdit}
              className="h-8 px-2 absolute right-0"
            >
              <Edit2 className="w-4 h-4" />
              Éditer
            </Button>
          )}
        </div>

        <a
          href={videoInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-2xl overflow-hidden shadow-lg group aspect-video"
          key={videoInfo.videoId}
        >
          <div className="absolute inset-0">
            <img
              src={videoInfo.thumbnail || "/placeholder.svg"}
              alt={videoInfo.title}
              className="w-full h-full object-cover"
              key={`img-${videoInfo.videoId}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-md:w-8 w-16 max-md:h-8 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play
                className="max-md:h-6 h-8 max-md:w-6 w-8 text-primary ml-1"
                fill="currentColor"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-semibold text-white max-md:text-ms text-xl mb-2 leading-tight">
              {videoInfo.title}
            </h3>
            <p className="text-white/80 text-xs">{videoInfo.speaker}</p>
          </div>
        </a>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier la vidéo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="video-url">URL YouTube</Label>
              <Input
                id="video-url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speaker">Nom de l'orateur</Label>
              <Input
                id="speaker"
                placeholder="Pst. Christian Saboukoulou"
                value={editSpeaker}
                onChange={(e) => setEditSpeaker(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? "Chargement..." : "Enregistrer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import type React from "react";

import { Sparkles, Flame, Sprout, Edit } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AccueilSeries() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editImages, setEditImages] = useState<string[]>([]);
  const [editTitles, setEditTitles] = useState<string[]>([]);
  const [editLinks, setEditLinks] = useState<string[]>([]);

  const defaultSeries = [
    {
      id: 1,
      title: "Nos Enseignements",
      episodes: "",
      icon: Sparkles,
      backgroundImage: "/images/bible-foundation.jpg",
      link: "/teachings",
    },
    {
      id: 2,
      title: "Nos Cellules de Maison",
      episodes: "",
      icon: Flame,
      backgroundImage: "/images/spiritual-fire.jpg",
      link: "/events",
    },
    {
      id: 3,
      title: "Nos Formations",
      episodes: "5 épisodes",
      icon: Sprout,
      backgroundImage: "/images/spiritual-growth.jpg",
      link: "/about",
    },
    {
      id: 4,
      title: "Activités",
      episodes: "8 épisodes",
      icon: Flame,
      backgroundImage: "/images/spiritual-fire.jpg",
      link: "/events",
    },
    {
      id: 5,
      title: "Témoignanges",
      episodes: "5 épisodes",
      icon: Sprout,
      backgroundImage: "/images/spiritual-growth.jpg",
      link: "/about",
    },
  ];

  const [series, setSeries] = useState(defaultSeries);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await fetch("/api/content-cards");
        if (response.ok) {
          const cards = await response.json();
          if (cards && cards.length > 0) {
            setSeries(
              defaultSeries.map((s, i) => ({
                ...s,
                backgroundImage: cards[i]?.imageData || s.backgroundImage,
                title: cards[i]?.title || s.title,
                link: cards[i]?.url || s.link,
              }))
            );
          }
        }
      } catch (error) {
        console.error("[v0] Erreur lors du chargement des cartes:", error);
      }
    };

    loadCards();
  }, []);

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...editImages];
        newImages[index] = reader.result as string;
        setEditImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setEditImages(series.map((s) => s.backgroundImage));
    setEditTitles(series.map((s) => s.title));
    setEditLinks(series.map((s) => s.link));
    setIsEditOpen(true);
  };

  const handleSave = async () => {
    try {
      const promises = series.map((s, index) =>
        fetch("/api/content-cards", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            position: index,
            title: editTitles[index],
            url: editLinks[index],
            imageData: editImages[index],
          }),
        })
      );

      await Promise.all(promises);

      setSeries(
        series.map((s, i) => ({
          ...s,
          backgroundImage: editImages[i],
          title: editTitles[i],
          link: editLinks[i],
        }))
      );
      setIsEditOpen(false);
      alert("Cartes sauvegardées avec succès!");
    } catch (error) {
      console.error("[v0] Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde des cartes");
    }
  };

  return (
    <section className="mt-8 relative ">
      <button
        onClick={handleEditClick}
        className="absolute top-3 right-4 z-20 p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
        title="Modifier les cartes"
      >
        <Edit className="h-4 w-4 text-gray-700 dark:text-gray-300" />
      </button>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7f20df]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#141117] dark:text-white uppercase tracking-tight">
            Programmes et activités
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7f20df]"></div>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 max-w-4xl mx-auto">
        {series.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col min-w-[160px] w-[160px] gap-2"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[3/4] rounded-xl flex flex-col items-start justify-end p-4 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
                {/*                 <Icon className="h-12 w-12 text-white/50 absolute top-4 left-4 z-10" />
                 */}{" "}
                <p className="text-white text-sm font-bold relative z-10 leading-tight text-balance">
                  {item.title}
                </p>
                <p className="text-white/70 text-[10px] relative z-10 w-full mt-1">
                  {item.episodes}
                </p>
              </a>
            </div>
          );
        })}
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Modifier les cartes</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {series.map((item, index) => (
              <div key={item.id} className="space-y-3 p-4 border rounded-lg">
                <h3 className="font-semibold text-base">Carte {index + 1}</h3>

                <div className="space-y-2">
                  <Label htmlFor={`title-${index}`}>Titre</Label>
                  <Input
                    id={`title-${index}`}
                    value={editTitles[index] || ""}
                    onChange={(e) => {
                      const newTitles = [...editTitles];
                      newTitles[index] = e.target.value;
                      setEditTitles(newTitles);
                    }}
                    placeholder="Titre de la carte"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`link-${index}`}>Lien (URL)</Label>
                  <Input
                    id={`link-${index}`}
                    value={editLinks[index] || ""}
                    onChange={(e) => {
                      const newLinks = [...editLinks];
                      newLinks[index] = e.target.value;
                      setEditLinks(newLinks);
                    }}
                    placeholder="/teachings ou https://example.com"
                  />
                </div>

                {/* Champ pour l'image */}
                <div className="space-y-2">
                  <Label htmlFor={`image-${index}`}>Image de fond</Label>
                  <div className="flex gap-4 items-start">
                    <div className="flex-1">
                      <input
                        id={`image-${index}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(index, e)}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#7f20df] file:text-white hover:file:bg-[#6a1bbd] cursor-pointer"
                      />
                    </div>
                    {editImages[index] && (
                      <img
                        src={editImages[index] || "/placeholder.svg"}
                        alt={`Aperçu ${editTitles[index]}`}
                        className="w-20 h-28 object-cover rounded-lg border"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Annuler
            </Button>
            <Button
              onClick={handleSave}
              className="bg-[#7f20df] hover:bg-[#6a1bbd]"
            >
              Enregistrer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

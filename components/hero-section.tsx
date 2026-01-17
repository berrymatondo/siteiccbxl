"use client";
import { useState, useEffect } from "react";
import { Pencil, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editImages, setEditImages] = useState([
    "/images/f2b.jpg",
    "/images/f3.jpg",
    "/images/f1.jpg",
    "/images/f5f.jpg",
  ]);

  const [slides, setSlides] = useState([
    { image: "/images/f2b.jpg", alt: "Pasteur prêchant avec passion" },
    { image: "/images/f3.jpg", alt: "Service de louange" },
    { image: "/images/f1.jpg", alt: "Congregation en adoration" },
    { image: "/images/f5f.jpg", alt: "Équipe média en action" },
  ]);

  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    const loadImages = async () => {
      try {
        const promises = [
          fetch("/api/media?key=hero_image_0"),
          fetch("/api/media?key=hero_image_1"),
          fetch("/api/media?key=hero_image_2"),
          fetch("/api/media?key=hero_image_3"),
        ];

        const responses = await Promise.all(promises);
        const images = await Promise.all(
          responses.map(async (res, index) => {
            if (res.ok) {
              const data = await res.json();
              return data.imageData;
            }
            return editImages[index];
          })
        );

        setSlides([
          { image: images[0], alt: "Pasteur prêchant avec passion" },
          { image: images[1], alt: "Service de louange" },
          { image: images[2], alt: "Congregation en adoration" },
          { image: images[3], alt: "Équipe média en action" },
        ]);
        setEditImages(images);
      } catch (error) {
        console.error("[v0] Erreur lors du chargement des images:", error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleWatchLive = () => {
    window.open("https://www.youtube.com/@impactcentrechretien/live", "_blank");
  };

  const handleSaveImages = async () => {
    try {
      const promises = editImages.map((imageData, index) =>
        fetch("/api/media", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key: `hero_image_${index}`,
            imageData,
          }),
        })
      );

      await Promise.all(promises);

      setSlides([
        { image: editImages[0], alt: "Pasteur prêchant avec passion" },
        { image: editImages[1], alt: "Service de louange" },
        { image: editImages[2], alt: "Congregation en adoration" },
        { image: editImages[3], alt: "Équipe média en action" },
      ]);
      setIsEditOpen(false);
      alert("Images sauvegardées avec succès!");
    } catch (error) {
      console.error("[v0] Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde des images");
    }
  };

  const handleFileUpload = (index: number, file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...editImages];
      newImages[index] = reader.result as string;
      setEditImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="@container">
      <div className="px-0  py-0">
        <div className="relative bg-zinc-900 xl min-h-160 shadow-lg overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(25, 17, 33, 0.1) 0%, rgba(25, 17, 33, 0.8) 100%), url("${slide.image}")`,
              }}
            />
          ))}

          {user && (
            <button
              onClick={() => {
                setEditImages(slides.map((s) => s.image));
                setIsEditOpen(true);
              }}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-lg shadow-lg transition-all"
              aria-label="Éditer les images du slider"
            >
              <Pencil className="w-4 h-4" />
            </button>
          )}

          <div className="relative flex flex-col justify-end min-h-160">
            <div className="p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[10px] font-bold uppercase tracking-wider text-black mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                En Direct
              </span>
              <h1 className="text-white text-center text-2xl md:text-6xl font-semibold">
                Bienvenue à Impact Centre Chrétien <br />{" "}
                <span className="text-yellow-400 md:text-4xl">Bruxelles</span>
              </h1>
              <p className="text-center text-gray-200 text-xs md:text-lg font-medium leading-relaxed ">
                Que vous soyez dans la foi ou fidèle à Jésus depuis des années,{" "}
                <span className="max-md:hidden">
                  {" "}
                  <br />{" "}
                </span>{" "}
                il y a une place pour vous à Impact Centre Chrétien(ICC), chez
                nous et dans notre famille.
              </p>

              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Modifier les images du slider</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {editImages.map((image, index) => (
              <div key={index} className="space-y-2">
                <label className="text-sm font-medium">Image {index + 1}</label>

                <div className="flex items-center gap-2">
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Choisir un fichier</span>
                    </div>
                    <input
                      id={`file-upload-${index}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileUpload(index, file);
                        }
                      }}
                    />
                  </label>
                </div>

                {image && (
                  <div className="mt-2">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Aperçu ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleSaveImages}>Enregistrer</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

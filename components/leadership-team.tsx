"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function LeadershipTeam() {
  const [expandedYvan, setExpandedYvan] = useState(false);
  const [expandedChristian, setExpandedChristian] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [yvanImage, setYvanImage] = useState("/images/image.png");
  const [christianImage, setChristianImage] = useState("/images/image.png");

  const [tempYvanImage, setTempYvanImage] = useState<string | null>(null);
  const [tempChristianImage, setTempChristianImage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadImages = async () => {
      try {
        const [yvanRes, christianRes] = await Promise.all([
          fetch("/api/media?key=pastor_yvan"),
          fetch("/api/media?key=pastor_christian"),
        ]);

        if (yvanRes.ok) {
          const data = await yvanRes.json();
          setYvanImage(data.imageData);
        }

        if (christianRes.ok) {
          const data = await christianRes.json();
          setChristianImage(data.imageData);
        }
      } catch (error) {
        console.error("[v0] Erreur lors du chargement des images:", error);
      }
    };

    loadImages();
  }, []);

  const handleYvanImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Change image Ivan");

    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setTempYvanImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChristianImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setTempChristianImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const promises = [];

      if (tempYvanImage) {
        promises.push(
          fetch("/api/media", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              key: "pastor_yvan",
              imageData: tempYvanImage,
            }),
          })
        );
        setYvanImage(tempYvanImage);
      }

      /*       if (tempChristianImage) {
        promises.push(
          fetch("/api/media", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              key: "pastor_christian",
              imageData: tempChristianImage,
            }),
          })
        );
        setChristianImage(tempChristianImage);
      } */

      await Promise.all(promises);

      setTempYvanImage(null);
      //setTempChristianImage(null);
      setIsEditOpen(false);
      alert("Images sauvegardées avec succès!");
    } catch (error) {
      console.error("[v0] Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde des images");
    }
  };

  const handleSave1 = async () => {
    // console.log("SAB");

    try {
      // const promises = [];

      if (tempChristianImage) {
        //promises.push(
        await fetch("/api/media", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key: "pastor_christian",
            imageData: tempChristianImage,
          }),
        });
        //  );
        setChristianImage(tempChristianImage);
        setIsEditOpen(false);
      }

      //await Promise.all(promises);

      //setTempYvanImage(null);
      setTempChristianImage(null);
      setIsEditOpen(false);
      alert("Images sauvegardées avec succès!");
    } catch (error) {
      console.error("[v0] Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde des images");
    }
  };

  const handleCancel = () => {
    setTempYvanImage(null);
    setTempChristianImage(null);
    setIsEditOpen(false);
  };

  return (
    <section className="px-4 mb-8 mt-8 relative">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7f20df]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#141117] dark:text-white uppercase tracking-tight">
            Équipe Dirigeante
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7f20df]"></div>
        </div>
      </div>

      <button
        onClick={() => setIsEditOpen(true)}
        className="absolute top-3 right-4 z-20 p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
        title="Modifier les images"
      >
        <Edit className="h-4 w-4 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Pasteur Yvan & Mode Castanou */}
      <div className="mb-12 bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-full md:w-1/4 flex-shrink-0">
            <img
              src={yvanImage || "/placeholder.svg"}
              alt="Pasteur Yvan & Mode Castanou"
              className="w-full rounded-xl object-cover"
            />
            <h3 className="text-xl font-bold text-[#141117] dark:text-white text-center mt-4">
              Pasteur Yvan & Mode
            </h3>
            <p className="text-lg font-semibold text-[#7f20df] text-center">
              CASTANOU
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-[#141117] dark:text-gray-300">
            {!expandedYvan ? (
              <>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Yvan Castanou est le Père fondateur des églises « Impact
                  Centre Chrétien » implantées dans le monde, à travers
                  lesquelles le Saint-Esprit transforme une multitude d'hommes
                  et de femmes en de véritables adorateurs (disciples). Après
                  avoir effectué un premier cursus biblique en Angleterre, il en
                  a suivi une autre à l'Institut Biblique de Paris et à
                  l'Académie des Hautes Etudes Théologiques et Pastorales de
                  Paris.
                </p>
                <button
                  onClick={() => setExpandedYvan(true)}
                  className="flex items-center gap-2 text-[#7f20df] hover:text-[#6a1bc0] font-semibold text-sm transition-colors"
                >
                  Lire plus <ChevronDown className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Yvan Castanou est le Père fondateur des églises « Impact
                  Centre Chrétien » implantées dans le monde, à travers
                  lesquelles le Saint-Esprit transforme une multitude d'hommes
                  et de femmes en de véritables adorateurs (disciples). Après
                  avoir effectué un premier cursus biblique en Angleterre, il en
                  a suivi une autre à l'Institut Biblique de Paris et à
                  l'Académie des Hautes Etudes Théologiques et Pastorales de
                  Paris.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  En mars 2004, lui et son épouse Modestine, ont été ordonnés
                  pasteurs par les pasteurs André Thobois de la Fédération
                  Protestante de France, et Emmanuel Toussaint du Concile
                  Mondial Protestant et Evangélique des Eglises.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Modestine Castanou, quant à elle, est responsable du Ministère
                  des Ressources Humaines et du Ministère des Femmes d'Impact à
                  Impact Centre Chrétien. Le pasteur Mode, comme on l'appelle
                  communément, est une femme de conviction, déterminée et
                  remplie d'assurance. Elle est consacrée au Seigneur et
                  profondément impliquée dans son œuvre. Engagée pour la cause
                  de la femme, elle est préoccupée par son épanouissement et son
                  déploiement dans la cellule familiale comme dans la société.
                </p>
                <button
                  onClick={() => setExpandedYvan(false)}
                  className="flex items-center gap-2 text-[#7f20df] hover:text-[#6a1bc0] font-semibold text-sm transition-colors"
                >
                  Lire moins <ChevronUp className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Pasteur Christian & Evelyne Saboukoulou */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center md:items-start">
          <div className="w-full md:w-1/4 flex-shrink-0">
            <img
              src={christianImage || "/placeholder.svg"}
              alt="Pasteur Christian & Evelyne Saboukoulou"
              className="w-full rounded-xl object-cover"
            />
            <h3 className="text-xl font-bold text-[#141117] dark:text-white text-center mt-4">
              Pasteur Christian & Evelyne
            </h3>
            <p className="text-lg font-semibold text-[#7f20df] text-center">
              SABOUKOULOU
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-[#141117] dark:text-gray-300">
            {!expandedChristian ? (
              <>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Le BENELUX (Belgique, Nederlands (Pays-Bas), Luxembourg) pour
                  Christ, voici l'une des églises en charge des pasteurs
                  Christian et Evelyne Saboukoulou. Tous deux ont œuvré dès les
                  premières heures d'ICC à Paris et sont en œuvre pour le
                  Seigneur en Belgique, principalement à Bruxelles. Dans la
                  simplicité, la détermination et la consécration totale à
                  Jésus-Christ, ils ont à cœur de faire connaître le message de
                  la bonne nouvelle du Royaume de Dieu et former une armée de
                  Gagneurs d'âmes, à Bruxelles et dans tout le BENELUX.
                </p>
                <button
                  onClick={() => setExpandedChristian(true)}
                  className="flex items-center gap-2 text-[#7f20df] hover:text-[#6a1bc0] font-semibold text-sm transition-colors"
                >
                  Lire plus <ChevronDown className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Le BENELUX (Belgique, Nederlands (Pays-Bas), Luxembourg) pour
                  Christ, voici l'une des églises en charge des pasteurs
                  Christian et Evelyne Saboukoulou.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Tous deux ont œuvré dès les premières heures d'ICC à Paris et
                  sont en œuvre pour le Seigneur en Belgique, principalement à
                  Bruxelles. Dans la simplicité, la détermination et la
                  consécration totale à Jésus-Christ, ils ont à cœur de faire
                  connaître le message de la bonne nouvelle du Royaume de Dieu
                  et former une armée de Gagneurs d'âmes, à Bruxelles et dans
                  tout le BENELUX.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Passionné de la parole de Dieu, zélé pour gagner et prendre
                  soin des âmes, Christian Saboukoulou a suivi sa formation
                  pastorale auprès du Pasteur Yvan Castanou à Paris.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Minutieux et conscient de l'importance du respect des
                  autorités établis, pasteur Christian a toujours fait preuve
                  d'obéissance et fidélité dans son service dans les petites,
                  comme dans les grandes choses.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Avec son épouse, il a été ordonné par ce dernier en 2011.
                </p>
                <button
                  onClick={() => setExpandedChristian(false)}
                  className="flex items-center gap-2 text-[#7f20df] hover:text-[#6a1bc0] font-semibold text-sm transition-colors"
                >
                  Lire moins <ChevronUp className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Modifier les images des pasteurs</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Pasteur Yvan & Mode */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                Pasteur Yvan & Mode Castanou
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleYvanImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#7f20df] file:text-white hover:file:bg-[#6a1bc0] cursor-pointer"
                />
                <div className="w-full max-w-sm mx-auto">
                  <img
                    src={tempYvanImage || yvanImage || "/placeholder.svg"}
                    alt="Aperçu Yvan & Mode"
                    className="w-full h-48 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                onClick={handleSave}
                className="flex-1 bg-[#7f20df] hover:bg-[#6a1bc0] text-white font-semibold py-3"
              >
                Enregistrer les modifications
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1 bg-transparent border-2 py-3"
              >
                Annuler
              </Button>
            </div>

            {/* Pasteur Christian & Evelyne */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                Pasteur Christian & Evelyne Saboukoulou
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChristianImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#7f20df] file:text-white hover:file:bg-[#6a1bc0] cursor-pointer"
                />
                <div className="w-full max-w-sm mx-auto">
                  <img
                    src={
                      tempChristianImage || christianImage || "/placeholder.svg"
                    }
                    alt="Aperçu Christian & Evelyne"
                    className="w-full h-48 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                onClick={handleSave1}
                className="flex-1 bg-[#7f20df] hover:bg-[#6a1bc0] text-white font-semibold py-3"
              >
                Enregistrer les modifications
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1 bg-transparent border-2 py-3"
              >
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

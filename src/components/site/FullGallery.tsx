"use client";

import { useMemo, useState } from "react";
import { GalleryTile } from "@/components/site/GalleryTile";
import { GalleryLightbox } from "@/components/site/GalleryLightbox";
import type { GalleryImage } from "@/data/gallery";

export function FullGallery({ images }: { images: GalleryImage[] }) {
  const categories = useMemo(
    () => Array.from(new Set(images.map((img) => img.category))),
    [images]
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterPill
            label="All"
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          />
          {categories.map((category) => (
            <FilterPill
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
        {filtered.map((img, i) => (
          <div key={img.src} className="mb-4 break-inside-avoid sm:mb-5">
            <GalleryTile
              {...img}
              onOpen={() => setLightboxIndex(i)}
              priority={i < 3}
            />
          </div>
        ))}
      </div>

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
        active
          ? "border-primary bg-primary text-white"
          : "border-ink/10 bg-white text-ink-soft hover:border-primary/40 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

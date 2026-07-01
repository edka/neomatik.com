import { useState } from "react";
import { gallery, type GalleryImage } from "@/content/gallery";

export function Gallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {gallery.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img)}
            className="group mb-4 block w-full overflow-hidden rounded-sm bg-surface"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={img.width}
              height={img.height}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full border border-hairline bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            Close
          </button>
          <figure className="max-h-[92vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[85vh] w-auto object-contain"
            />
            {active.caption && (
              <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {active.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const image = images[activeIndex];
  const total = images.length;
  const hasNav = total > 1;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[200] flex items-center justify-center animate-in fade-in duration-200"
      style={{ backgroundColor: "rgba(5,5,5,0.97)" }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 py-6 pointer-events-none select-none">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase pointer-events-none" style={{ color: "rgba(255,255,255,0.3)" }}>
          {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(total).padStart(2, "0")}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close lightbox"
          className="font-body text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 pointer-events-auto"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
        >
          Close
        </button>
      </div>

      {hasNav && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.25)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
        >
          <ChevronLeft />
        </button>
      )}

      {/* Image + italic Garamond caption */}
      <div
        className="flex flex-col items-center px-14 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={activeIndex}
          src={image.src}
          alt={image.alt}
          className="block object-contain animate-in fade-in duration-300"
          style={{ maxWidth: "88vw", maxHeight: "82vh" }}
        />
        <p
          className="mt-5 tracking-wider"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.32)",
          }}
        >
          {image.title}
        </p>
      </div>

      {hasNav && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.25)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
        >
          <ChevronRight />
        </button>
      )}
    </div>,
    document.body
  );
};

// ─── GalleryGrid ─────────────────────────────────────────────────────────────

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 1 | 2;
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  const hasFeature = images.length >= 3;

  return (
    <>
      {/* Image count */}
      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
        {images.length} {images.length === 1 ? "photograph" : "photographs"}
      </p>

      <div
        className={`grid gap-1 ${
          images.length <= 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {images.map((image, i) => {
          const isFeatured = hasFeature && i === 0;
          const dimmed = hoveredIdx !== null && hoveredIdx !== i;

          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Open ${image.title} in lightbox`}
              onClick={() => open(i)}
              onKeyDown={(e) => e.key === "Enter" && open(i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative overflow-hidden cursor-zoom-in"
              style={{
                opacity: dimmed ? 0.18 : 1,
                transition: "opacity 0.55s ease",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Subtle darkening overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Title reveal */}
              <div className="absolute inset-x-0 bottom-0 px-5 py-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-white/85">
                  {image.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
};

export default GalleryGrid;

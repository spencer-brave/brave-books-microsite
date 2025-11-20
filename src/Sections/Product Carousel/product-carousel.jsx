import { useState } from "react";
import "./product-carousel.css";

export default function FibcProductCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="product__carousel">
      <div className="product__carousel-wrapper">
        <button
          type="button"
          className="product__carousel-btn product__carousel-btn--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="product__carousel-image-container">
          <img
            src={images[current]}
            alt={`Featured product ${current + 1}`}
            className="product__carousel-image"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          className="product__carousel-btn product__carousel-btn--next"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="product__carousel-thumbnails">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`product__carousel-thumbnail ${
              idx === current ? "active" : ""
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
          >
            <img 
              src={images[idx]}
              alt={`Product carousel ${current + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

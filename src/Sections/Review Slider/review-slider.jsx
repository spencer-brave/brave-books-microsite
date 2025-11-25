import { useEffect, useState, useRef } from "react";
import styles from "./review-slider.module.css";
import SectionStyles from "../../Components/section-styles";

export default function ReviewSlider(settings) {
  const reviews = settings.props.reviews || [];
  const [index, setIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalRef = useRef(null);

  const stopRotation = () => {
    if (!autoRotate) return;
    setAutoRotate(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [autoRotate, reviews.length]);

  const nextReview = () => {
    stopRotation();
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    stopRotation();
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section
      id={`review-slider-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
      onMouseEnter={stopRotation}
      onTouchStart={stopRotation}
    >
      <SectionStyles id={settings.id} props={settings.props} />
      <div className="container">
        <h2
          className={`text-center ${styles.heading}`}
          dangerouslySetInnerHTML={{ __html: settings.props.heading }}
        />
        <h4
          className={`text-center ${styles.subheading}`}
          dangerouslySetInnerHTML={{ __html: settings.props.subheading }}
        />
        <div className={styles.sliderWrapper}>
          <button className={styles.prevButton} onClick={prevReview}>
            ‹
          </button>

          {current && (
            <div className={styles.reviewBlock}>
              {current.image && (
                <img
                  className={styles.reviewImage}
                  src={current.image}
                  alt={current.altText || "Review image"}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
              )}
              <div className={styles.reviewContent}>
                <div
                  className={styles.reviewCopy}
                  dangerouslySetInnerHTML={{ __html: current.copy }}
                />
                <div className={styles.stars}>
                  {Array.from({ length: current.stars || 5 }).map((_, i) => (
                    <span key={i}>⭐️</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button className={styles.nextButton} onClick={nextReview}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

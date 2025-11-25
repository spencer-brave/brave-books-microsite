import styles from "./information-slider.module.css";
import SectionStyles from "../../Components/section-styles";

export default function InformationSlider(settings) {
  let clickTracker = 0;

  const elementScroll = (direction, containerId) => {
    const containerEl = document.getElementById(containerId);
    if (!containerEl) return;
    const slides = containerEl.children;
    if (!slides.length) return;

    const slideWidth = slides[0].offsetWidth; // width of one slide
    const maxIndex = slides.length - 1;

    if (direction === "forward") {
      if (clickTracker < maxIndex) {
        clickTracker++;
      }
    } else {
      if (clickTracker > 0) {
        clickTracker--;
      }
    }

    containerEl.scrollTo({
      left: slideWidth * clickTracker,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={`information-slider-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      <div className="container">
        <SectionStyles
          sectionId={`information-slider-${settings.id}`}
          props={settings.props}
        />
        <div className={styles.sliderHeading}>
          <h2 className="heading-md text-center">{settings.props.title}</h2>
        </div>
        <div
          id={`slideContainer${settings.id}`}
          className={`slider__container ${styles.sliderContainer}`}
        >
          {settings.props.slides.map((slide, i) => (
            <div key={i} className={`slide__block ${styles.slide}`}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.image}
              />
              <div className={styles.text}>
                {slide.title && <h3 className="heading-sm">{slide.title}</h3>}
                {slide.description && (
                  <div className={styles.description}>
                    <p>{slide.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`scroll__buttons ${styles.scrollBtns}`}>
          <button
            aria-label="Previous Image"
            id="fibcReviewBack"
            onClick={() =>
              elementScroll("backward", `slideContainer${settings.id}`)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,256,256"
            >
              <g
                fill="white"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ miBlendMode: "normal" }}
              >
                <g transform="translate(256,256) rotate(180) scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM20.707,15.707l-4,4c-0.195,0.195 -0.451,0.293 -0.707,0.293c-0.256,0 -0.512,-0.098 -0.707,-0.293c-0.391,-0.391 -0.391,-1.023 0,-1.414l2.293,-2.293h-7.586c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h7.586l-2.293,-2.293c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l4,4c0.391,0.391 0.391,1.023 0,1.414z"></path>
                </g>
              </g>
            </svg>
          </button>
          <button
            aria-label="Next Image"
            onClick={() =>
              elementScroll("forward", `slideContainer${settings.id}`)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,256,256"
            >
              <g
                fill="white"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ miBlendMode: "normal" }}
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM20.707,15.707l-4,4c-0.195,0.195 -0.451,0.293 -0.707,0.293c-0.256,0 -0.512,-0.098 -0.707,-0.293c-0.391,-0.391 -0.391,-1.023 0,-1.414l2.293,-2.293h-7.586c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h7.586l-2.293,-2.293c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l4,4c0.391,0.391 0.391,1.023 0,1.414z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

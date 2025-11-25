import styles from "./image-with-text-stacked.module.css";
import SectionStyles from "../../Components/section-styles";

export default function ImageWTextStacked(settings) {
  return (
    <section
      id={`image-w-text-stacked-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      <SectionStyles sectionId={`image-w-text-stacked-${settings.id}`} props={settings.props} />
      <div className="container">
        <div>
          <div
            style={{ order: settings.props.order }}
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
          />
          {settings.props.image && (
            <div>
              <img
                className="desktop__image"
                loading={settings.id > 1 ? "lazy" : "eager"}
                fetchPriority={settings.id > 1 ? "low" : "high"}
                decoding="async"
                src={settings.props.image}
                alt={settings.props.altText}
                width="400"
                height="400"
              />
              <img
                className="mobile__image"
                loading={settings.id > 1 ? "lazy" : "eager"}
                fetchPriority={settings.id > 1 ? "low" : "high"}
                decoding="async"
                src={settings.props.mobileImage || settings.props.image}
                alt={settings.props.altText}
                width="400"
                height="400"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

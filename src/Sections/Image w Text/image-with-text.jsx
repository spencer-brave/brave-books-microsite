import styles from "./image-with-text.module.css";
import SectionStyles from "../../Components/section-styles";
import { lazy, Suspense } from "react";
const componentMap = {
  EmailCollectionInput: lazy(() =>
    import("../../Components/email-collection-input")
  ),
};

export default function ImageWText(settings) {
  return (
    <section
      id={`image-w-text-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      <SectionStyles
        sectionId={`image-w-text-${settings.id}`}
        props={settings.props}
      />
      <div className="container">
        <div className={settings.props.contentLayout}>
          <div className={`html-content ${styles.htmlContent}`} style={{ order: settings.props.order }}>
            <div
              dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
            />
            {settings.props.components &&
              settings.props.components.map((component, index) => {
                const Component = componentMap[component.name];
                return (
                  <Suspense key={index} fallback={null}>
                    <Component {...component.props} />
                  </Suspense>
                );
              })}
          </div>
          {settings.props.image && (
            <div>
              <img
                loading={settings.id > 1 ? "lazy" : "eager"}
                fetchPriority={settings.id > 1 ? "low" : "high"}
                decoding="async"
                src={settings.props.image}
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

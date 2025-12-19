import styles from "../Image w Text/image-with-text.module.css";

export default function ImageWText(settings) {
  return (
    <section
      id={`image-w-text-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      {settings.props.customCSS && (
        <style>{`
          #image-w-text-${settings.id} {
            ${settings.props.customCSS}
          }
        `}</style>
      )}
      <div className="container">
        <div className={settings.props.contentLayout}>
          <div
            style={{ order: settings.props.order }}
            className={`image-w-text__content ${styles.htmlContent}`}
            dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
          />
          <div>
            <img
              fetchPriority="high"
              loading="eager"
              decoding="async"
              src={settings.props.image}
              srcSet={`
                ${settings.props.image}&width=400 400w,
                ${settings.props.image}&width=800 800w,
                ${settings.props.image}&width=1200 1200w`}
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
              alt={settings.props.altText}
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

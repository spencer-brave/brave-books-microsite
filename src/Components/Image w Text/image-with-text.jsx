import styles from "./image-with-text.module.css";

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
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
          />
          <div>
            <img
              loading={settings.id > 1 ? 'lazy' : 'eager'}
              fetchPriority={settings.id > 1 ? 'low' : 'high'}
              decoding="async"
              src={settings.props.image}
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

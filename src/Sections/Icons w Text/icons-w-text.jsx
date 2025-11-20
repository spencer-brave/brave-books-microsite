import styles from "./icons-w-text.module.css";

export default function IconsWText(settings) {
  return (
    <section
      id={`icons-w-text-${settings.id}`}
      className={styles.section}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      {settings.props.customCSS && (
        <style>{`
          #icons-w-text-${settings.id} {
            ${settings.props.customCSS}
          }
        `}</style>
      )}
      <div className="container">
        <div className={styles["text-and-icon-header"]}>
          {settings.props.header && (
            <h2 className="heading-md">{settings.props.header}</h2>
          )}
          {settings.props.subHeader && <p>{settings.props.subHeader}</p>}
        </div>
        <div className={styles["text-and-icon-blocks"]}>
          {settings.blocks?.map((block, i) => (
            <div className={styles["text-and-icon-block"]} key={i}>
              <div className={styles["text-and-icon-block-img"]}>
                <img src={block.image} width="200" height="200" alt="Icon" />
              </div>
              <div>
                {block.title && <h3>{block.title}</h3>}
                {block.body && (
                  <div className={styles["text-and-icon__content"]}>
                    <p>{block.body}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {settings.props.btnText && (
          <div>
            <a href={settings.props.btnLink} className="primary-btn">
              {settings.props.btnText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

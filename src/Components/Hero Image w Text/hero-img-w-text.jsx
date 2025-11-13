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
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }}
          />
          <div>
            <img
              fetchPriority="high"
              loading="eager"
              decoding="async"
              src="https://cdn.shopify.com/s/files/1/0564/9032/8257/files/Kirk_in_background_with_book_copy.webp?v=1761681572"
              srcSet="
                https://cdn.shopify.com/s/files/1/0564/9032/8257/files/Kirk_in_background_with_book_copy.webp?v=1761681572&width=400 400w,
                https://cdn.shopify.com/s/files/1/0564/9032/8257/files/Kirk_in_background_with_book_copy.webp?v=1761681572&width=800 800w,
                https://cdn.shopify.com/s/files/1/0564/9032/8257/files/Kirk_in_background_with_book_copy.webp?v=1761681572&width=1200 1200w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
              alt="Kirk Cameron showing off his children's book titled The Fox, the Fair, and the Invention Scare"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

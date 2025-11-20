export default function Banner(settings) {
  return (
    <section
      id={`banner-${settings.id}`}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      {settings.props.customCSS && (
        <style>{`
          #banner-${settings.id} {
            ${settings.props.customCSS}
          }
          .banner__container {
            padding: var(--space-md);
            max-width: var(--page-width);
            margin: auto;
          }
        `}</style>
      )}
      <div className="banner__container">
        <div dangerouslySetInnerHTML={{ __html: settings.props.htmlContent }} />
      </div>
    </section>
  );
}

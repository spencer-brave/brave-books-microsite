import styles from "./header.module.css";
import Logo from "../../Assets/BRAVE_Logo_Black.webp";
import SectionStyles from "../../Components/section-styles";

export default function Header(settings) {
  return (
    <section
      id={`header-${settings.id}`}
      style={{ backgroundColor: settings.props.bgColor }}
    >
      <SectionStyles
        sectionId={`header-${settings.id}`}
        props={settings.props}
      />
      <div className={`header__container ${styles.container}`}>
        <div>
          <img
            src={settings.props.logo ? settings.props.logo : Logo}
            srcSet={
              settings.props.logo
                ? `${settings.props.logo}?width=100 100w, ${settings.props.logo}?width=200 200w, ${settings.props.logo}?width=400 400w`
                : `
              ${Logo}?width=100 100w,
              ${Logo}?width=200 200w,
              ${Logo}?width=400 400w
            `
            }
            sizes="(max-width: 600px) 100px, 200px"
            alt={settings.props.altText}
          />
        </div>
        {settings.props.cta && (
          <div>
            <a href="#fibc-product-section" className="primary-btn">
              {settings.props.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

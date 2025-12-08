import { useEffect, useState } from "react";
import SectionStyles from "../../Components/section-styles";
import styles from "./fixed-button.module.css";

export default function FixedButton(settings) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={`fixed-bottom-cta-${settings.id}`}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      style={{ backgroundColor: "rgb(255 255 255 / 56%)", backdropFilter: "blur(4px)" }}
    >
      <SectionStyles
        sectionId={`fixed-bottom-cta-${settings.id}`}
        props={settings.props}
      />

      <div className={styles.inner}>
        <a {...(settings.props.emailModal ? { "data-email-modal": true } : {})} href={settings.props.buttonLink} className="primary-btn">
          {settings.props.buttonText}
        </a>
      </div>
    </section>
  );
}

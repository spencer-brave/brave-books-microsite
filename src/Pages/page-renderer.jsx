import Header from "../Components/Header/header";
import ImageWText from "../Components/Image w Text/image-with-text";
import TrustedBanner from "../Components/Trusted Banner/trusted-banner";
import IconsWText from "../Components/Icons w Text/icons-w-text";
import BookClubProduct from "../Components/Book Club Product/book-club-product.jsx";
import HeroImgWText from "../Components/Hero Image w Text/hero-img-w-text.jsx";

const components = {
  Header,
  ImageWText,
  TrustedBanner,
  IconsWText,
  BookClubProduct,
  HeroImgWText
};

export default function PageRenderer({ sections }) {
  return (
    <>
      {sections.map((section, i) => {
        const SectionComponent = components[section.type];
        if (!SectionComponent) return null;
        return <SectionComponent key={i} id={i} {...section} />;
      })}
    </>
  );
}

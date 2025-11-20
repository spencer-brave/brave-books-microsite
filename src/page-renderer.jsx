import Banner from "./Sections/Banner/banner.jsx";
import BookClubProduct from "./Sections/Book Club Product/book-club-product.jsx";
import EmailCollection from "./Sections/Email Collection/email-collection.jsx";
import Header from "./Sections/Header/header.jsx";
import HeroImgWText from "./Sections/Hero Image w Text/hero-img-w-text.jsx";
import IconsWText from "./Sections/Icons w Text/icons-w-text.jsx";
import ImageWText from "./Sections/Image w Text/image-with-text.jsx";
import TrustedBanner from "./Sections/Trusted Banner/trusted-banner.jsx";

const components = {
  Banner,
  BookClubProduct,
  EmailCollection,
  Header,
  HeroImgWText,
  IconsWText,
  ImageWText,
  TrustedBanner
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

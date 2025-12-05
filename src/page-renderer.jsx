import AsSeenOn from "./Sections/As Seen On/as-seen-on.jsx";
import Banner from "./Sections/Banner/banner.jsx";
import BookClubProduct from "./Sections/Book Club Product/book-club-product.jsx";
import EmailCollection from "./Sections/Email Collection/email-collection.jsx";
import EmailModal from "./Sections/Email Modal/email-modal.jsx";
import FixedButton from "./Sections/Fixed Button/fixed-button.jsx";
import Header from "./Sections/Header/header.jsx";
import HeroImgWText from "./Sections/Hero Image w Text/hero-img-w-text.jsx";
import IconsWText from "./Sections/Icons w Text/icons-w-text.jsx";
import ImageWText from "./Sections/Image w Text/image-with-text.jsx";
import ImageWTextStacked from "./Sections/Image w Text Stacked/image-with-text-stacked.jsx";
import InformationSlider from "./Sections/Information Slider/information-slider.jsx";
import ReviewSlider from "./Sections/Review Slider/review-slider.jsx";
import TrustedBanner from "./Sections/Trusted Banner/trusted-banner.jsx";

const components = {
  AsSeenOn,
  Banner,
  BookClubProduct,
  EmailCollection,
  EmailModal,
  FixedButton,
  Header,
  HeroImgWText,
  IconsWText,
  ImageWText,
  ImageWTextStacked,
  InformationSlider,
  ReviewSlider,
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

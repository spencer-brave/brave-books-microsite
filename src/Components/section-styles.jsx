export default function SectionStyles({ id, props }) {
  const {
    customCSS,
    bgImage,
    bgImageMobile,
    bgPosition,
    bgPositionMobile,
    sectionHeight,
    sectionHeightMobile,
  } = props;

  const styles = `
    #image-w-text-${id} {
      ${customCSS || ""}
      background: url(${bgImage || "unset"});
      background-size: cover;
      background-position: ${bgPosition || "center"};
      height: ${sectionHeight || "auto"};
    }

    @media screen and (max-width: 696px) {
      #image-w-text-${id} {
        background: url(${bgImageMobile || "unset"});
        background-size: cover;
        background-position: ${bgPositionMobile || "center"};
      height: ${sectionHeightMobile || "auto"};
      }
    }
  `;

  return <style>{styles}</style>;
}

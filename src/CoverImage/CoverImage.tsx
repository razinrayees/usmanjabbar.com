type CoverImageProps = {
  imageUrl: string;
  height: string;
  width?: string;
  borderRadius: string;
  outlineThickness?: string;
  outlineColor: string;
};

const CoverImage = ({
  imageUrl,
  height,
  width,
  borderRadius,
  outlineThickness,
  outlineColor,
}: CoverImageProps) => {
  const generateMargin = (outlineThickness: string) => {
    const marginNum = (parseFloat(outlineThickness)).toString();
    const marginExt = outlineThickness.split(marginNum)[1];
    const margin = `${parseFloat(marginNum) * 2}${marginExt}`;
    return margin;
  };

  const borderConfig = borderRadius ? { borderRadius } : {};

  if (outlineColor && !outlineThickness) {
    outlineThickness = '0.5rem'
  };

  const outlineConfig = (outlineThickness && outlineColor) ? {
    outline: `${outlineThickness} solid ${outlineColor}`,
    outlineOffset: `${outlineThickness}`,
    margin: generateMargin(outlineThickness)
  } : {};

  return (
    <>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height,
        width,
        ...outlineConfig,
        ...borderConfig
      }}>
      </div>
    </>
  );
};

CoverImage.defaultProps = {
  width: 'auto',
  borderRadius: null,
  outlineThickness: null,
  outlineColor: null
};

export default CoverImage;

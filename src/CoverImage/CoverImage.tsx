type CoverImageProps = {
  imageUrl: string;
  height: string;
  width?: string;
  borderRadius: string;
  outlineThickness?: string;
  outlineColor: string;
  caption: string;
};

const CoverImage = ({
  imageUrl,
  height,
  width,
  borderRadius,
  outlineThickness,
  outlineColor,
  caption
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
    <div style={{ width, height }}>
      {
        caption &&
        <h5 style={{ margin: '1rem 0'}}>{caption}</h5>
      }
      <div style={{
        position: 'relative',
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: height && caption ? 'calc(100% - 3.25rem)' : height || '100%',
        width: '100%',
        ...outlineConfig,
        ...borderConfig
      }}>
      </div>
    </div>
  );
};

CoverImage.defaultProps = {
  width: 'auto',
  borderRadius: null,
  outlineThickness: null,
  outlineColor: null,
  caption: null
};

export default CoverImage;

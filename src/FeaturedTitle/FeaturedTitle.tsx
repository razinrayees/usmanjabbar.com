type FeaturedTitleProps = {
  title: string;
  iconUrl: string;
};

const FeaturedTitle = ({ title, iconUrl }: FeaturedTitleProps) => {
  const size = '3rem';
  const iconMargin = '0.85rem';

  return (
    <div>
      <div style={{ height: size, width: size, marginBottom: `${iconMargin}` }}>
        <img src={iconUrl} height={'100%'} width={'100%'} alt='' />
      </div>
      <h1>{title}</h1>
    </div>
  )
}

export default FeaturedTitle;

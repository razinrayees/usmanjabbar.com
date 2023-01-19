import './FullWidthSection.css';

type FullWidthSectionProps = {
  children?: React.ReactNode;
  isDarkMode: boolean;
  containerWidth: Number;
}

const FullWidthSection = ({ children, isDarkMode, containerWidth }: FullWidthSectionProps) => {
  const theme = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black'
  };

  return (
    <section className='fw-section' style={theme}>
      <div className='fw-container' style={{width: `${containerWidth}px`}}>
        {children}
      </div>
    </section>
  );
}

FullWidthSection.defaultProps = {
  children: [],
  isDarkMode: true,
  containerWidth: 1400
};

export default FullWidthSection;

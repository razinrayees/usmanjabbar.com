import { CSSProperties } from 'react';

import './FullWidthSection.css';

type FullWidthSectionProps = {
  children?: React.ReactNode;
  isDarkMode: boolean;
  isBordered: boolean;
  width: Number;
  height: Number;
  containerStyleOverrides: CSSProperties;
  sectionStyleOverrides: CSSProperties;
  sectionId: string;
}

const FullWidthSection = ({
  children,
  isDarkMode,
  isBordered,
  width,
  height,
  sectionStyleOverrides,
  containerStyleOverrides,
  sectionId
}: FullWidthSectionProps) => {
  const theme = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black'
  };

  const border = `solid 1px ${theme.color}`;
  const borderConfig = isBordered ? {
    borderRight: border,
    borderLeft: border
  } : {};

  const containerHeight = height ? `${height}px` : 'auto'
  const containerWidth = `${width}px`;

  return (
    <section className='fw-section' style={{ ...theme, ...sectionStyleOverrides }} id={`${sectionId}`}>
      <div className='fw-border' style={{ ...borderConfig, width: containerWidth }}>
        <div className='fw-container' style={{ height: containerHeight, padding: '4rem', ...containerStyleOverrides }}>
          { children }
        </div>
      </div>
    </section>
  );
}

FullWidthSection.defaultProps = {
  children: [],
  isDarkMode: true,
  isBordered: false,
  width: 1400,
  height: null,
  containerStyleOverrides: {},
  sectionStyleOverrides: {},
  sectionId: ''
};

export default FullWidthSection;

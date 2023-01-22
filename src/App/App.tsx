import { useState } from "react";

import FullWidthSection from "../FullWidthSection/FullWidthSection";
import CoverImage from "../CoverImage/CoverImage";
import FeaturedTitle from "../FeaturedTitle/FeaturedTitle";
import Button from "../Button/Button";

import heroImage from '../assets/images/usman.jpg';
import infoIcon from '../assets/images/info-icon.svg';
import holbertonUsman from '../assets/images/holberton-usman.jpg';
import setup from '../assets/images/setup.jpg';
import CareerInfo from "../CareerInfo/CareerInfo";

const App = () => {
  const [
    isDarkMode,
    setDarkMode
  ] = useState<boolean>(true);

  return (
    <>
      <FullWidthSection
        isBordered={true}
        height={1400}
        containerStyleOverrides={{ display: 'flex', flexDirection: 'column' }}
        sectionId={'home'}
        isDarkMode={isDarkMode}
      > 
        <h2 style={{ textAlign: 'center' }}>uaj.</h2>
        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <h3 style={{ textAlign: 'center' }}>Full-Stack Software Engineer</h3>
          <h1 style={{ textAlign: 'center' }}>Usman A. Jabbar</h1>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
            <div style={{ width: `31.25%`, textAlign: 'left' }}>
              <h2>Software Engineer</h2>
            </div>
            <div style={{ width: `37.5%` }}>
              <CoverImage
                height={'50rem'}
                borderRadius={'15rem'}
                imageUrl={heroImage}
                outlineColor={'white'}
              />
            </div>
            <div style={{ width: `31.25%`, textAlign: 'right' }}>
              <h2>UI/UX Enthusiast</h2>
            </div>
          </div>
        </div>
      </FullWidthSection>
      <FullWidthSection sectionId="about-me" isBordered={true}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <FeaturedTitle title={'About Me'} iconUrl={infoIcon} />
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2.5rem' }}>
              <a href={'#resume'}>
                <Button bgColor="linear-gradient(97.92deg, #00C2FF 0%, #0075FF 98.87%)" textColor="white">
                  Resume
                </Button>
              </a>
              <a href={'#holberton'}>
                <Button bgColor={'white'} textColor={'black'}>
                  More About Holberton
                </Button>
              </a>
            </div>
          </div>
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h4>I’m a Full-Stack Software Engineer by profession with a strong passion for UI design.</h4>
            <br></br>
            <h4>After self-learning to code for 5 years, I went to Holberton School for Software Engineering. I did my Foundations in C and Python, and chose Full-Stack Software Engineering for my specialization year</h4>
            <br></br>
            <h4>Born in Connecticut, for the first 19 years, I grew up outside of the US, schooling in over 4 countries and residing in 6.</h4>
          </div>
        </div>
      </FullWidthSection>
      <FullWidthSection sectionId='photo-gallery' isBordered={true} containerStyleOverrides={{ display: 'flex', justifyContent: 'space-between'}}>
        <CoverImage
          imageUrl={setup}
          width={'60%'}
          height={'37.5rem'}
          borderRadius={'1rem'}
          caption={'2023 Desk Setup - I\'m pretty enthusiastic about my space'}
        />
        <CoverImage
          imageUrl={holbertonUsman}
          width={'37.5%'}
          height={'37.5rem'}
          borderRadius={'1rem'}
          caption={'A picture of me at Holberton in 2020'}
        />
      </FullWidthSection>
      <FullWidthSection sectionId="career-history" isBordered={true} >
        <FeaturedTitle title={'Career History'} iconUrl={infoIcon} />
        <div style={{ display: 'flex', margin: '2rem 0', placeContent: 'space-between' }}>
          <div style={{ width: '32%' }}>
            <CareerInfo
              timeframe="Nov 2022 - Present"
              companyName="Factset Technologies"
              title="Software Developer 1"
              background='#1F1F1F'
              textColor='white'
            />
          </div>
          <div style={{ width: '32%' }}>
            <CareerInfo
              timeframe="Jul 2021 - Nov 2022"
              companyName="iDonate LLC"
              title="Software Engineer"
              background='#A1A1A1'
              textColor='black'
            />
          </div>
          <div style={{ width: '32%' }}>            
            <CareerInfo
              timeframe="Oct 2015 - Jun 2020"
              companyName="GeeksULTD.COM"
              title="Fmr Co-Founder & Editor"
              background='white'
              textColor='black'
            />
          </div>

        </div>
      </FullWidthSection>
    </>
  )
};

export default App;

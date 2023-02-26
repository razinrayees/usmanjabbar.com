import { useState } from "react";

import FullWidthSection from "../FullWidthSection/FullWidthSection";
import CoverImage from "../CoverImage/CoverImage";
import FeaturedTitle from "../FeaturedTitle/FeaturedTitle";
import Button from "../Button/Button";
import CareerInfo from "../CareerInfo/CareerInfo";

import heroImage from '../assets/images/usman.jpg';
import infoIcon from '../assets/images/info-icon.svg';
import holbertonUsman from '../assets/images/holberton-usman.jpg';
import setup from '../assets/images/setup.jpg';
import newTabIcon from '../assets/images/new-tab.svg';
import holbertonJI from '../assets/images/ji.jpg';
import './App.css';

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
      <FullWidthSection sectionId="about-me" isBordered={true} isDarkMode={isDarkMode}>
        <div className='content' style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <FeaturedTitle title={'About Me'} iconUrl={infoIcon} />
            <div className="buttons-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '2.5rem' }}>
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
      <FullWidthSection sectionId='photo-gallery' isBordered={true} isDarkMode={isDarkMode} containerStyleOverrides={{ display: 'flex', justifyContent: 'space-between'}}>
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
      <FullWidthSection sectionId="career-history" isBordered={true} isDarkMode={isDarkMode}>
        <FeaturedTitle title={'Career History'} iconUrl={infoIcon} />
        <div className='career-box' style={{ display: 'flex', margin: '2rem 0', placeContent: 'space-between' }}>
          <div>
            <CareerInfo
              timeframe="Nov 2022 - Present"
              companyName="Factset Technologies"
              title="Software Developer 1"
              background='#1F1F1F'
              textColor='white'
            />
          </div>
          <div>
            <CareerInfo
              timeframe="Jul 2021 - Nov 2022"
              companyName="iDonate LLC"
              title="Software Engineer"
              background='#A1A1A1'
              textColor='black'
            />
          </div>
          <div>            
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
      <FullWidthSection sectionId="testimonials" isBordered={true} isDarkMode={isDarkMode}>
        <div className='testimonals-content-container' style={{ backgroundColor: '#101010', height: '100%', display: 'flex', padding: '8rem', borderRadius: '1rem' }}>
          <div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
            <CoverImage height='10rem' width="10rem" imageUrl={holbertonJI} borderRadius='100rem' />
            <h3>J.I Cruz</h3>
            <h5>Former Holberton Peer</h5>
          </div>
          <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4>Usman is a passionate, competent developer with an **excellent** attention to detail.</h4>
            <br />
            <h4>At our coding school, Usman quickly garnered a reputation for having the cleanest code, the most descriptive and helpful documentation, and the most impressively managed git repositories. No student was as disciplined at taking care of minutiae as Usman was. His work style inspired me and others to take pride in the devilish details, rather than loathe them.</h4>
            <br />
            <h4>His passion reflected itself not only in his code-ethic, but also in his openness to help, his openness to *ask* for help, his dedication to learning outside of the school curriculum, and his impressive portfolio that he's built throughout the last few years.</h4>
          </div>
        </div>
      </FullWidthSection>
      <FullWidthSection sectionId='footer' isBordered={true} isDarkMode={isDarkMode}>
        <footer>
          <div style={{ display: 'flex' }}>
            <a style={{ display: 'flex' }} href={'mailto:&#104;&#105;&#064;&#117;&#115;&#109;&#097;&#110;&#106;&#097;&#098;&#098;&#097;&#114;&#046;&#099;&#111;&#109;'}>
              <h2>hi@usmanjabbar.com</h2>
              <img height={'100%'} src={newTabIcon}></img>
            </a>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto'}}>
              <a target="_blank" rel="noreferrer" href="https://github.com/UsmanAJabbar" style={{ marginRight: '2rem'}}>
                <h3>Github</h3>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/usman-abdul-jabbar/">
                <h3>LinkedIn</h3>
              </a>
            </div>
          </div>
        </footer>
      </FullWidthSection>
    </>
  )
};

export default App;

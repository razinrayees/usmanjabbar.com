import FullWidthSection from "../FullWidthSection/FullWidthSection";
import CoverImage from "../CoverImage/CoverImage";

import heroImage from '../assets/images/usman.jpg';


const App = () => (
  <FullWidthSection
    isBordered={true}
    height={1400}
    containerStyleOverrides={{ display: 'flex', flexDirection: 'column' }}
    sectionId={'home'}
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
);

export default App;

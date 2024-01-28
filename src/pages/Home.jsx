import _debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
// import { animateScroll } from 'react-scroll';
import HeroHeader from '../ui/HeroHeader';
import Video from '../ui/Video';
import Section from '../ui/Section';
import Background from '../ui/Background';
import styled from 'styled-components';

const heroSections = [
  {
    id: 1,
    heading: 'Award-winning aero bikes',
    subheading: '',
    link: '',
  },
  {
    id: 2,
    heading: 'Exploro',
    subheading: 'Our award-winning gravel bike',
    link: '',
  },
  {
    id: 3,
    heading: 'Strada',
    subheading: "World's most comfortable aero bike 2.0",
    link: '',
  },

  { id: 4, heading: 'Made in Italy', subheading: 'Learn about 3t', link: '' },
  { id: 5, heading: 'Contact us', subheading: 'Reach us globally', link: '' },
];

const Main = styled.main`
  background-color: var(--color-background);
  /* transform: translateY(); */
  transition: all 1s;
`;

// const scrollToSection = (sectionId) => {
//   const sectionElement = document.getElementById(`section${sectionId}`);
//   if (sectionElement) {
//     const offsetTop = sectionElement.offsetTop;
//     window.scrollTo({
//       top: offsetTop,
//       behavior: 'smooth',
//     });
//   }
// };

function Home() {
  const [step, setStep] = useState(1);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowDown' && step < 5) {
      setStep((s) => s + 1);
      scrollToSection(step + 1);
    } else if (event.key === 'ArrowUp' && step > 1) {
      setStep((s) => s - 1);
      scrollToSection(step - 1);
    }
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(`section${sectionId}`, {
      duration: 500,
      delay: 0,
      smooth: 'easeOutQuart',
      snap: true,
    });
  };

  useEffect(() => {
    // Attach event listeners when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [step]);

  // const handleScroll = _debounce(() => {
  //   const currentScrollPos = window.scrollY;

  //   if (prevScrollPosRef.current >= 0) {
  //     if (currentScrollPos > prevScrollPosRef.current) {
  //       handleNext();
  //     } else {
  //       handlePrevious();
  //     }
  //   }

  //   prevScrollPosRef.current = currentScrollPos;
  // }, 50);

  return (
    <Main>
      <HeroHeader
        heading={heroSections[step - 1].heading}
        subheading={heroSections[step - 1].subheading}
      />
      {/* <Section id={1}>
        <Video
          animate={{ opacity: 100 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 1 }}
          playsInline
          autoPlay
          muted
          loop
          src='/img/extrema_italia_small.webm'
          type='video/webm'
        />
      </Section> */}

      {heroSections.map((heroSection) => (
        <Section
          key={heroSection.id}
          id={`section${heroSection.id}`}
          background={'/img/3T-BMW-Exploro-Bike-10.jpg'}
        ></Section>
      ))}
    </Main>
  );
}

export default Home;

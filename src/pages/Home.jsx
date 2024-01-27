import _debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import HeroHeader from '../ui/HeroHeader';
import Video from '../ui/Video';
import Section from '../ui/Section';
import Background from '../ui/Background';

const headings = [
  { heading: 'Exploro', subheading: 'Our award-winning gravel bike', link: '' },
  {
    heading: 'Strada',
    subheading: "World's most comfortable aero bike 2.0",
    link: '',
  },
  { heading: 'Made in Italy', subheading: 'Learn about 3t', link: '' },
  { heading: 'Contact us', subheading: 'Reach us globally', link: '' },
];

function Home() {
  // const step = 4;
  const [step, setStep] = useState(1);

  function handlePrevious() {
    // console.log('Scrolling up');
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // console.log('Scrolling down');
    if (step < 4) setStep((s) => s + 1);
  }

  const prevScrollPosRef = useRef(0);

  const handleScroll = _debounce(() => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPosRef.current >= 0) {
      if (currentScrollPos > prevScrollPosRef.current) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    prevScrollPosRef.current = currentScrollPos;
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <HeroHeader
        heading={headings[step - 1].heading}
        subheading={headings[step - 1].subheading}
      />
      <Section id='hero'>
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
      </Section>

      <Section
        id='exploroHero'
        background={'/img/3T-BMW-Exploro-Bike-10.jpg'}
      ></Section>

      <Section
        id='stradaHero'
        background={'/img/3T-BMW-Exploro-Bike-10.jpg'}
      ></Section>

      <Section
        id='about'
        background={'/img/3T-BMW-Exploro-Bike-10.jpg'}
      ></Section>

      <Section
        id='contact'
        background={'/img/3T-BMW-Exploro-Bike-10.jpg'}
      ></Section>
    </>
  );
}

export default Home;

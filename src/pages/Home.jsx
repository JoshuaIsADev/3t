import HeroHeader from '../ui/HeroHeader';
import Section from '../ui/Section';
import { useRef, useState } from 'react';

const heroSections = [
  {
    id: 1,
    heading: 'Fast adventures',
    subheading: 'Award-winning aero bikes',
    background: '',
    video: '/img/extrema_italia_small.webm',
    link: '',
  },
  {
    id: 2,
    heading: 'Exploro',
    subheading: "From all terrain to road, we've got you covered",
    background: '/img/section-02c.jpg',
    video: '',
    productLink: 'exploro',
  },
  {
    id: 3,
    heading: 'Strada',
    subheading: "World's most comfortable aero bike",
    background: '/img/3t_strada_due_review_06.jpg',
    video: '',
    productLink: 'strada',
  },

  {
    id: 4,
    heading: 'Made in Italy',
    subheading: 'Learn about 3t',
    background: '/img/extremaitalia_mercurio_02-1600x1200.jpg',
    video: '',
    link: 'about',
  },
  {
    id: 5,
    heading: 'Contact us',
    subheading: 'Reach us globally',
    background: '',
    video: '',
    link: '',
  },
];

function Home() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 5) setStep((s) => s + 1);
  }

  return (
    <>
      {heroSections.map((heroSection) => (
        <>
          <HeroHeader
            heading={heroSection.heading}
            subheading={heroSection.subheading}
            productLink={heroSection.productLink}
            link={heroSection.link}
          />
          <Section
            key={heroSection.id}
            id={heroSection.id}
            background={heroSection.background}
            video={heroSection.video}
          />
        </>
      ))}
    </>
  );
}

export default Home;

import SectionFeature from '../ui/SectionFeature';
import React, { useRef, useState } from 'react';

const heroSections = [
  {
    id: 1,
    heading: 'Award-winning bikes',
    subheading: 'Fast adventures. Unforgettable experiences',
    filter: '/img/noiseb.jpg',
    mix: 'multiply',
    background: '',
    video: '/img/extrema_italia_small.webm',
    link: '',
  },
  {
    id: 2,
    heading: 'Exploro',
    subheading: 'Fast on all terrain',
    background: '/img/section-02c.jpg',
    video: '',
    link: 'exploro',
  },
  {
    id: 3,
    heading: 'Strada',
    subheading: "World's most comfortable aero bike",
    background: '/img/3t_strada_due_review_06.jpg',
    video: '',
    link: 'strada',
  },

  {
    id: 4,
    heading: 'Made in Italy',
    subheading: 'With love and passion',
    background: '/img/extremaitalia_mercurio_02-1600x1200.jpg',
    video: '',
    link: 'about',
  },
];

function Home() {
  // const [step, setStep] = useState(1);

  // function handlePrevious() {
  //   if (step > 1) setStep((s) => s - 1);
  // }

  // function handleNext() {
  //   if (step < 5) setStep((s) => s + 1);
  // }

  return (
    <>
      {heroSections.map((heroSection, index) => (
        <React.Fragment key={`${heroSection.id}-${heroSection.heading}`}>
          <>
            <SectionFeature
              id={heroSection.id}
              heading={heroSection.heading}
              subheading={heroSection.subheading}
              link={heroSection.link}
              background={heroSection.background}
              video={heroSection.video}
            />
          </>
        </React.Fragment>
      ))}
    </>
  );
}

export default Home;

import Noise from '../ui/Noise';
import SectionFeature from '../ui/SectionFeature';
import React, { useRef, useState } from 'react';
import heroSectionData from '../data/heroSection.json';

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
      <Noise />
      {heroSectionData.map((heroData) => (
        <SectionFeature
          key={heroData.id}
          heading={heroData.heading}
          subHeading={heroData.subHeading}
          link={heroData.link}
          background={heroData.background}
          video={heroData.video}
        />
      ))}
    </>
  );
}

export default Home;

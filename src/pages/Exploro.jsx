import Noise from '../ui/Noise';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductSwiper } from '../ui/ProductSwiper';

import exploroProducts from '../data/exploroProducts.json';

import Hero from '../ui/Hero';
import SectionProducts from '../ui/SectionProducts';
import SectionHighlight from '../ui/SectionHighlight';
import SectionDetails from '../ui/SectionDetails';
import Footer from '../ui/Footer';

const sizes = {
  51: {
    rider: '157-171',
    stack: '544',
    reach: '364',
    fork: '375',
    headTube: '147',
    headAngle: '69.2',
    bb: '77',
    seatAngle: '72.5',
    seatTube: '463',
    topTube: '518',
    wheelBase: '1018',
    front: '612',
    rear: '418',
  },
  54: {
    rider: '168-180',
    stack: '566',
    reach: '374',
    fork: '375 ',
    headTube: '161',
    headAngle: '70.7',
    bb: '77',
    seatAngle: '72.5',
    seatTube: '490',
    topTube: '536',
    wheelBase: '1013',
    front: '607',
    rear: '418',
  },
  56: {
    rider: '176-186',
    stack: '586',
    reach: '382',
    fork: '375',
    headTube: '180',
    headAngle: '71.7',
    bb: '75',
    seatAngle: '72.5',
    seatTube: '518',
    topTube: '549',
    wheelBase: '1019',
    front: '612',
    rear: '418',
  },
  58: {
    rider: '183-195',
    stack: '606',
    reach: '390',
    fork: '375',
    headTube: '201',
    headAngle: '72.2',
    bb: '73',
    seatAngle: '72.5',
    seatTube: '545',
    topTube: '563',
    wheelBase: '1028',
    front: '622',
    rear: '418',
  },
};

function Exploro() {
  const hero = exploroProducts[0].hero[0];
  const products = exploroProducts[1].products;
  const highlights = exploroProducts[2].highlights;
  const details = exploroProducts[3].details;

  return (
    <>
      {/* <Noise /> */}
      <Hero
        image={hero.image}
        heading={hero.name}
        subHeading={hero.heroSubHeading}
        tickerText={hero.tickerText}
      ></Hero>

      <SectionProducts name={hero.name} products={products} />

      <SectionHighlight highlights={highlights} />

      {/* <SectionDetails details={details} /> */}
    </>
  );
}

export default Exploro;

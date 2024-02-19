import styled from 'styled-components';
import Background from '../ui/Background';
import Heading from '../ui/Heading';
import HeroHeading from '../ui/HeroHeading';
import Noise from '../ui/Noise';
import ProductCard from '../ui/ProductCard';
import Row from '../ui/Row';
import Video from '../ui/Video';
import Img from '../ui/Img';
import { ButtonGallery } from '../ui/Button';
import SectionFeature from '../ui/SectionFeature';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductSwiper } from '../ui/ProductSwiper';

import exploroProductsData from '../data/exploroProducts.json';
import exploroProducts from '../data/exploroProducts.json';
import heroSectionData from '../data/heroSection.json';
import HeadingContainer from '../ui/HeadingContainer';
import Section from '../ui/Section';
import ArticleContainer from '../ui/ArticleContainer';
import ImgCard from '../ui/ImgCard';
import InfoCard from '../ui/InfoCard';
import { Col } from '../ui/Columns';
import Hero from '../ui/Hero';
import SectionProducts from '../ui/SectionProducts';

const productHighlights = [
  {
    id: 'exploro',
    highlightH: 'Gravel just got faster',
    highlightP:
      'Developed and made in our Italian Factory, using proprietary Filament Winding + RTM technology to get a super responsive yet comfortable platform with a unique feeling and look.',
    video: '/img/exploro_small.webm',
    highlightImg: [
      '/img/3T-BMW-Exploro-Bike-42.jpg',
      '/img/3T-BMW-Exploro-Bike-13.jpg',
    ],
    galleryImg: [
      '/img/3T-BMW-Exploro-Bike-42.jpg',
      '/img/3T-BMW-Exploro-Bike-13.jpg',
      '/img/3T-BMW-Exploro-Bike-10.jpg',
    ],
    featureImg: '/img/exploro-travel.jpg',
  },
];

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
  const highlights = exploroProducts[1].highlights[0];
  const products = exploroProducts[0].products;

  return (
    <>
      <Noise />
      <Hero
        background={highlights.heroBackground}
        altHero='hero'
        heading={highlights.name}
        subHeading={highlights.heroSubHeading}
        paragraphs={highlights.heroParagraphs}
      ></Hero>
      <SectionProducts products={products} />

      {/* <SectionFeature
        id='productHero'
        heading={heroSectionData[1].heading}
        subHeading={heroSectionData[1].subHeading}
        // background={highlights.background}
      ></SectionFeature>
      <Section id='products'>
        <HeadingContainer
          heading='A model for every need'
          subHeading={exploroProductsData[1].highlights[0].introHeading}
        />
        <ArticleContainer $variation='single'>
          <ProductSwiper productData={exploroProductsData[0].products} />
        </ArticleContainer>
      </Section>
      <SectionFeature
        background={exploroProductsData[1].highlights[0].galleryImg[0]}
      ></SectionFeature>
      <Section id='highlight1'>
        <HeadingContainer
          heading={exploroProductsData[1].highlights[0].highlight1Heading}
          subHeading={exploroProductsData[1].highlights[0].highlight1SubHeading}
        />
        <ArticleContainer>
          <InfoCard
            heading={exploroProductsData[1].highlights[0].highight1subheading2}
            paragraph={exploroProductsData[1].highlights[0].highlight1paragraph}
          />

          <ImgCard src={exploroProductsData[1].highlights[0].highlight2Img} />
        </ArticleContainer>
      </Section> */}
    </>
  );
}

export default Exploro;

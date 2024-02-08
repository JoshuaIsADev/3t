import styled from 'styled-components';
import Background from '../ui/Background';
import Column from '../ui/Column';
import Heading from '../ui/Heading';
import HeroHeading from '../ui/HeroHeading';
import Noise from '../ui/Noise';
import ProductCard from '../ui/ProductCard';
import Row from '../ui/Row';
import Section from '../ui/Section';
import Video from '../ui/Video';
import Img from '../ui/Img';
import Gallery from '../ui/Gallery';
import { ButtonGallery } from '../ui/Button';
import SectionFeature from '../ui/SectionFeature';
import { SpecColumn, SpecContainer, SpecText } from '../ui/SpecTable';

const exploroProducts = [
  {
    name: 'Exploro Primo',
    headline: "The world's first aero gravel bike",
    price: '2,988',
    link: 'primo',
    image: '/img/3t-exploro-primo.jpg',
    tire: '54',
  },
  {
    name: 'Exploro Ultra',
    headline: 'For tough gravel',
    price: '3,298',
    link: 'ultra',
    image: '/img/3t-exploro-ultra.jpg',
    tire: '61',
  },
  {
    name: 'Exploro Racemax Italia',
    headline: 'Fastest speed on gravel, made in Italy',
    price: '7,684',
    link: 'racemax',
    image: '/img/3t-exploro-racemax-italia.jpg',
    tire: '57',
  },
  {
    name: 'Exploro Extrema Italia',
    headline: 'For the worst gravel and the most comfort, made in Italy',
    price: '7,299',
    link: 'extrema',
    image: '/img/3t-exploro-extrema-italia.jpg',
    tire: '61',
  },
];

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

// const sizes = [
//   {
//     rider: ['157-171', '168-180', '176-186', '183-195'],
//     stack: ['544', '566', '586', '606'],
//     reach: ['364', '374', '382', '390'],
//     fork: ['375', '375 ', '375', '375'],
//     headTube: ['147', '161 ', '180', '201'],
//     headAngle: ['69.2', '70.7', '71.7', '72.2'],
//     bb: ['77', '77', '75', '73'],
//     seatAngle: ['72.5', '72.5', '72.5', '72.5'],
//     seatTube: ['463', '490', '518', '545'],
//   },
// ];

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
  console.log(sizes[51].rider);
  return (
    <>
      {/* <HeroHeading
        // variation='feature'
        heading='Exploro'
        subheading='Fast on all terrain'
      /> */}
      {/* <Section id='products'>
        <Row $variation='product'> */}
      {exploroProducts.map((exploroProduct, index) => (
        <ProductCard
          key={index}
          name={exploroProduct.name}
          headline={exploroProduct.headline}
          price={exploroProduct.price}
          link={exploroProduct.link}
          image={exploroProduct.image}
        />
      ))}
      {/* </Row>
      </Section> */}
      <Section id='productHero'>
        <Video
          playsInline
          autoPlay
          muted
          loop
          $variation='halfFeature'
          src={productHighlights[0].video}
        />
      </Section>
      <Section id='highlight'>
        <Row>
          <Column $variation='twoColumns'>
            <Heading as='h1'>{productHighlights[0].highlightH}</Heading>
          </Column>
          <Column
            $variation='oneColumn'
            $align={'self-end'}
            $padding={'0rem 0rem .75rem'}
          >
            <p>{productHighlights[0].highlightP}</p>
          </Column>
        </Row>
        <Row>
          {productHighlights[0].highlightImg.map((img, i) => (
            <Column key={i} $variation='twoColumns'>
              <Img src={img} />
            </Column>
          ))}
        </Row>
        <Row $variation='smallPadding'>
          <Heading as='h5'>Tire clearances</Heading>
        </Row>
        <Row>
          {exploroProducts.map((exploroProduct, i) => (
            <Column key={i}>
              <p>{exploroProduct.name}</p>
              <Heading as='h2'>
                {exploroProduct.tire}
                <span style={{ fontWeight: '600' }}>mm</span>
              </Heading>
            </Column>
          ))}
        </Row>
      </Section>
      <Section id='gallery'>
        <Gallery src={productHighlights[0].galleryImg} />
      </Section>
      <Section id='size'>
        <Row>
          <Column $variation='fourColumns'>
            <SpecContainer>
              <SpecColumn>
                <SpecText>Test</SpecText>
                <SpecText>Test</SpecText>
              </SpecColumn>
              <SpecColumn>
                {Object.values(sizes['51']).map((spec, i) => (
                  <SpecText key={i}>{spec}</SpecText>
                ))}
              </SpecColumn>
              <SpecColumn>
                {Object.values(sizes['54']).map((spec, i) => (
                  <SpecText key={i}>{spec}</SpecText>
                ))}
              </SpecColumn>
              <SpecColumn>
                {Object.values(sizes['56']).map((spec, i) => (
                  <SpecText key={i}>{spec}</SpecText>
                ))}
              </SpecColumn>
              <SpecColumn>
                {Object.values(sizes['58']).map((spec, i) => (
                  <SpecText key={i}>{spec}</SpecText>
                ))}
              </SpecColumn>
            </SpecContainer>
          </Column>
        </Row>
      </Section>
      <SectionFeature
        background={productHighlights[0].featureImg}
      ></SectionFeature>
    </>
  );
}

export default Exploro;

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
    ],
  },
];

function Exploro() {
  return (
    <>
      <Noise />
      <HeroHeading
        // variation='feature'
        heading='Exploro'
        subheading='Fast on all terrain'
      />
      <Section id='products'>
        <Row $variation='product'>
          {exploroProducts.map((exploroProduct) => (
            <ProductCard
              key={exploroProduct.name + exploroProduct.index}
              name={exploroProduct.name}
              headline={exploroProduct.headline}
              price={exploroProduct.price}
              link={exploroProduct.link}
              image={exploroProduct.image}
            />
          ))}
        </Row>
      </Section>
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
          {productHighlights[0].highlightImg.map((img, index) => (
            <Column key={index} $variation='twoColumns'>
              <Img src={img} />
            </Column>
          ))}
        </Row>
        <Row $variation='smallPadding'>
          <Heading as='h5'>Tire clearances</Heading>
        </Row>
        <Row>
          {exploroProducts.map((exploroProduct) => (
            <Column key={exploroProduct.index}>
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
    </>
  );
}

export default Exploro;

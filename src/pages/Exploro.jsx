import Background from '../ui/Background';
import HeroHeading from '../ui/HeroHeading';
import Noise from '../ui/Noise';
import ProductCard from '../ui/ProductCard';
import Row from '../ui/Row';
import Section from '../ui/Section';
import Video from '../ui/Video';

const exploroProducts = [
  {
    name: 'Exploro Primo',
    headline: "The world's first aero gravel bike",
    price: '2,988',
    link: 'primo',
    image: '/img/3t-exploro-primo.jpg',
  },
  {
    name: 'Exploro Ultra',
    headline: 'For tough gravel',
    price: '3,298',
    link: 'ultra',
    image: '/img/3t-exploro-ultra.jpg',
  },
  {
    name: 'Exploro Racemax Italia',
    headline: 'Fastest speed on gravel, made in Italy',
    price: '7,684',
    link: 'racemax',
    image: '/img/3t-exploro-racemax-italia.jpg',
  },
  {
    name: 'Exploro Extrema Italia',
    headline: 'For the worst gravel and the most comfort, made in Italy',
    price: '7,299',
    link: 'extrema',
    image: '/img/3t-exploro-extrema-italia.jpg',
  },
];

const exploroDatas = [
  {
    video: '/img/exploro_small.webm',
  },
];

function Exploro() {
  console.log(exploroDatas[0].video);
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
          src={exploroDatas[0].video}
        />
      </Section>
    </>
  );
}

export default Exploro;

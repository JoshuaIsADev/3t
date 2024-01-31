import Noise from '../ui/Noise';
import ProductCard from '../ui/ProductCard';
import Row from '../ui/Row';
import Section from '../ui/Section';

const exploroDatas = [
  {
    name: 'Primo',
    headline: "The world's first aero gravel bike",
    price: '2,988',
    link: 'primo',
    image: '/img/3t-exploro-primo.jpg',
  },
  {
    name: 'Ultra',
    headline: 'For tough gravel',
    price: '3,298',
    link: 'ultra',
    image: '/img/3t-exploro-ultra.jpg',
  },
  {
    name: 'Racemax Italia',
    headline: 'Fastest speed on gravel, made in Italy',
    price: '7,684',
    link: 'racemax',
    image: '/img/3t-exploro-racemax-italia.jpg',
  },
  {
    name: 'Extrema Italia',
    headline: 'For the worst gravel and the most comfort, made in Italy',
    price: '7,299',
    link: 'extrema',
    image: '/img/3t-exploro-extrema-italia.jpg',
  },
];

function Exploro() {
  return (
    <>
      <Noise />
      <Section id='products'>
        <Row $variation='product'>
          {exploroDatas.map((exploroData) => (
            <ProductCard
              key={exploroData.name + exploroData.index}
              name={exploroData.name}
              headline={exploroData.headline}
              price={exploroData.price}
              link={exploroData.link}
              image={exploroData.image}
            />
          ))}
        </Row>
      </Section>
    </>
  );
}

export default Exploro;

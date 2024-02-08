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
import { Pagination, Navigation } from 'swiper/modules';
import exploroProductsData from '../data/exploroProducts.json';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { StyledSwiper, SwiperNav } from '../ui/StyledSwiper';

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
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Section id='products'>
        <Row>
          <Column $gridColumn='span 4' $variation='center'>
            <Heading as='h5'>Select your base</Heading>
          </Column>
        </Row>
        <Row>
          <Column $gridColumn='span 4'>
            <StyledSwiper
              modules={[Pagination, Navigation]}
              pagination={pagination}
              clickable={true}
              className='mySwiper'
            >
              <SwiperNav />

              {exploroProductsData.map((exploroProduct) => (
                <SwiperSlide key={exploroProduct.image}>
                  <ProductCard
                    name={exploroProduct.name}
                    headline={exploroProduct.headline}
                    price={exploroProduct.price}
                    link={exploroProduct.link}
                    image={exploroProduct.image}
                  />
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </Column>
        </Row>

        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          // navigation='true'
          pagination='true'
          breakpoints={{ 768: { slidesPerView: 4 } }}
          on={{
            slideChange: () => console.log('slide changed'),
            progress: (s, progress) => console.log(`progress is ${progress}`),
          }}
        > */}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperNav />
        </Swiper> */}
      </Section>
      {/* {exploroProducts.map((exploroProduct, index) => (
        <ProductCard
          key={index}
          name={exploroProduct.name}
          headline={exploroProduct.headline}
          price={exploroProduct.price}
          link={exploroProduct.link}
          image={exploroProduct.image}
        />
      ))} */}
    </>
  );
}

export default Exploro;

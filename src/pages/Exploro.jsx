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
import heroSectionData from '../data/heroSection.json';
import HeadingContainer from '../ui/HeadingContainer';
import Section from '../ui/Section';
import ArticleContainer from '../ui/ArticleContainer';
import ImgCard from '../ui/ImgCard';
import TextCard from '../ui/TextCard';
import { Col } from '../ui/Columns';

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
  return (
    <>
      <Noise />
      <SectionFeature
        id='productHero'
        heading={heroSectionData[1].heading}
        subHeading={heroSectionData[1].subHeading}
        background={heroSectionData[1].background}
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
          heading='Realistic testing'
          subHeading={exploroProductsData[1].highlights[0].highlight1SubHeading}
        />
        <ArticleContainer>
          <TextCard
            heading={exploroProductsData[1].highlights[0].highight1subheading2}
            paragraph={exploroProductsData[1].highlights[0].highlight1paragraph}
          />

          <ImgCard src={exploroProductsData[1].highlights[0].highlight2Img} />
        </ArticleContainer>
      </Section>

      {/* <Section id='highlight2'>
        <HeadingContainer
          heading='3 flavors of exploring'
          subHeading={exploroProductsData[1].highlights[0].highlightHeading3}
        />
        <ArticleContainer>
          <HighlightImgCard
            image={exploroProductsData[1].highlights[0].highlightImg3}
          />
        </ArticleContainer>
      </Section> */}
      {/* <Section id='products'>
        <Row>
          <Column $gridColumn='1 / span 4'>
            <Heading as='h2' $variation='hero'>
              A model for every need
            </Heading>
          </Column>
        </Row>
        <Row>
          <Column $gridColumn='1 / span 1'>
            <SubHeadingContainer>
              <p>{exploroProductsData[1].highlights[0].introHeading}</p>
            </SubHeadingContainer>
          </Column>
        </Row>

        <StyledSwiper
          modules={[Pagination, Navigation]}
          pagination={true}
          // className='mySwiper'
        >
          <SwiperNav />
          {exploroProductsData[0].products.map((exploroProduct) => (
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
      </Section> */}

      {/* <SectionFeature
        background={exploroProductsData[1].highlights[0].galleryImg[0]}
      ></SectionFeature>
      <Section id='highlight1'>
        <Row>
          <Column $gridColumn='1 / span 4'>
            <HeadingContainer>
              <Heading as='h4'>The first gravel bike</Heading>
            </HeadingContainer>
          </Column>
        </Row>
        <Row>
          <Column $gridColumn='1 / span 1'>
            <SubHeadingContainer>
              <p>{exploroProductsData[1].highlights[0].highlightHeading2}</p>
            </SubHeadingContainer>
          </Column>
        </Row>
        <Row $gap='0'>
          <Column $gridColumn='1 / span 2'>
            <Img
              src={exploroProductsData[1].highlights[0].highlightImg2[0]}
              $ratio='3/2'
            />
          </Column>
          <Column $gridColumn='3 / span 2'>
            <Img
              src={exploroProductsData[1].highlights[0].highlightImg2[1]}
              $ratio='3/2'
            />
          </Column>
        </Row>
      </Section>
      <Section id='tireHeadline' $variation='headline'>
        <SectionHeading
          heading={exploroProductsData[1].highlights[0].tireHeading}
        />
      </Section>
      <Section id='tire'>
        <Row>
          <Column $gridColumn='2 / span 2' $variation='center'>
            {exploroProductsData[1].highlights[0].tireSubHeading}
          </Column>
        </Row>
        <Row>
          {exploroProductsData[0].products.map((exploroProduct) => (
            <Column
              $gridColumn='span 1'
              $variation='center'
              key={exploroProduct.name}
            >
              <Heading as='h4' $padding='0 0 1rem'>
                {exploroProduct.name}
              </Heading>
              <Heading as='h3'>
                {exploroProduct.tire}{' '}
                <span>
                  <Heading as='h4' $padding='1rem 0 0'>
                    mm
                  </Heading>
                </span>
              </Heading>
            </Column>
          ))}
        </Row>
        <Row>
          <Column $gridColumn='2 / span 1'>
            <Img></Img>
            <p>
              To make the fastest possible gravel bike, you need to start with
              the tire. Tire choice determines comfort & grip. But it also
              determines how you can shape the frame to redirect the airflow.
            </p>
          </Column>
          <Column $gridColumn='3 / span 1'>
            <Img></Img>
            <p>
              To aerodynamically engineer the frame around the tires, you need
              to know what their REAL measurements are. Not what’s on the label,
              but how they really fit. That’s REALFAST aerodynamics. But it’s
              not easy, as the tire dimension depends on the rim you use, the
              pressure and of course how accurate the manufacturer’s claimed
              size is.
            </p>
          </Column>
        </Row>
      </Section> */}
    </>
  );
}

export default Exploro;

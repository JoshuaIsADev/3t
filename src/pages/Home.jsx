import HeroHeader from '../ui/HeroHeader';
import Video from '../ui/Video';
import Section from '../ui/Section';
import Background from '../ui/Background';

function Home() {
  const BackgroundImageSrc = '/img/section-02b.jpg';
  return (
    <>
      <Section id='hero'>
        <Video
          animate={{ opacity: 100 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 1 }}
          playsInline
          autoPlay
          muted
          loop
          src='/img/extrema_italia_small.webm'
          type='video/webm'
        />
        <HeroHeader
          heading={'Fast adventures'}
          subheading={'Explore new terrain without giving up speed or comfort'}
        />
      </Section>
      {/* <Section id='productShow'>
        <Background src={BackgroundImageSrc} />
        <HeroHeader
          heading={'Award-winning aero bikes'}
          subheading={"From rough terrain to road, we've got you covered"}
        />
      </Section> */}
      <Section id='about'>
        <Background src={BackgroundImageSrc} />
        <HeroHeader heading={'Made in Italy'} subheading={'Learn about 3t'} />
      </Section>
    </>
  );
}

export default Home;

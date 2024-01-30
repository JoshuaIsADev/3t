import styled from 'styled-components';
import Video from './Video';
import HeroHeading from './HeroHeading';

const StyledSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  z-index: -1;
`;

function SectionFeature({
  id,
  ref,
  heading,
  subheading,
  productLink,
  link,
  background,
  video,
}) {
  return (
    <StyledSection id={id} ref={ref}>
      <HeroHeading
        heading={heading}
        subheading={subheading}
        productLink={productLink}
        link={link}
      />
      <StyledBackground src={background}></StyledBackground>
      {video ? (
        <Video
          src={video}
          playsInline
          autoPlay
          muted
          loop
          type='video/webm'
        ></Video>
      ) : (
        ''
      )}
    </StyledSection>
  );
}

export default SectionFeature;

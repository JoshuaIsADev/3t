import styled from 'styled-components';
import Video from './Video';
import HeroHeading from './HeroHeading';
import Background from './Background';

const StyledSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
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
        variation='feature'
        heading={heading}
        subheading={subheading}
        productLink={productLink}
        link={link}
      />
      {video ? (
        <Video src={video} playsInline autoPlay muted loop type='video/webm' />
      ) : (
        <Background src={background}></Background>
      )}
    </StyledSection>
  );
}

export default SectionFeature;

import styled from 'styled-components';
import Video from './Video';
import HeroHeading from './HeroHeading';
import Background from './Background';

const StyledSection = styled.section`
  display: flex;
  width: var(--width-desktop);
  height: 100vh;
  flex-direction: column;
`;

function SectionFeature({
  id,
  ref,
  heading,
  subHeading,
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
        subHeading={subHeading}
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

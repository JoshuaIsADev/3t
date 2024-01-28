import styled from 'styled-components';
import Video from '../ui/Video';

const StyledBackground = styled.div`
  /* width: 100vw;*/
  height: 100vh;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  z-index: -1;
`;

// const StyledVideo = styled.video``

const StyledSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

function Section({ id, ref, background, video }) {
  console.log(video);
  return (
    <StyledSection id={id} ref={ref}>
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

export default Section;

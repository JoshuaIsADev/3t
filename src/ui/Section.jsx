import styled from 'styled-components';

const StyledBackground = styled.div`
  /* width: 100vw;*/
  height: 100vh;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  z-index: -1;
`;

const StyledSection = styled.section`
  display: flex;
  width: calc(100vw - 120px);
  height: 100vh;

  flex-direction: column;
  /* scroll-snap-align: center;
  scroll-snap-stop: always; */
  /* transition: all 1s linear; */
`;

function Section({ id, background }) {
  return (
    <StyledSection id={id}>
      <StyledBackground src={background}></StyledBackground>
    </StyledSection>
  );
}

export default Section;

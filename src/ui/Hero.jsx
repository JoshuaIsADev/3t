import styled from 'styled-components';
import InfoCard from './InfoCard';

const StyledHero = styled.section`
  width: 100%;
  height: 100lvh;
  background-image: url('/img/3t_strada_due_review_06.jpg');
  background-size: cover;
`;

function Hero() {
  return (
    <StyledHero>
      <InfoCard />
    </StyledHero>
  );
}

export default Hero;

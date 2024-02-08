import styled from 'styled-components';
import Column from './Column';
import StyledLink from './StyledLink';
import Img from './Img';
import Section from './Section';
import Row from './Row';
import Heading from './Heading';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

function ProductCard({ name, headline, price, link, image }) {
  return (
    <>
      <Row $variation='noPadding'>
        <Column $gridColumn='2 / span 2'>
          <Img src={image}></Img>

          <TextContainer>
            <p>{name}</p>
            <p>{headline}</p>
            <p>from {price} €</p>
            <p>
              <StyledLink to={`/${link}`}>Configure</StyledLink>
            </p>
          </TextContainer>
        </Column>
      </Row>
    </>
  );
}

export default ProductCard;

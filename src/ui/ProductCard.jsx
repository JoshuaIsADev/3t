import styled from 'styled-components';
import Column from './Column';
import StyledLink from './StyledLink';

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

function ProductCard({ name, headline, price, link, image }) {
  return (
    <>
      <Column $variation='twoColumns'>
        <Img src={image}></Img>
        <TextContainer>
          <p>{name}</p>
          <p>from {price} €</p>
        </TextContainer>
        <TextContainer>
          <p>{headline}</p>
          <p>
            <StyledLink to={`/${link}`}>Configure</StyledLink>
          </p>
        </TextContainer>
      </Column>
    </>
  );
}

export default ProductCard;

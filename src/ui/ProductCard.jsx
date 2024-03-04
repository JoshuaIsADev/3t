import styled from 'styled-components';
import StyledLink from './StyledLink';
import Heading from './Heading';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  min-width: 300px;
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
`;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   padding-top: 1rem;
// `;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1rem 1.5rem;
  gap: 0.5rem;
`;

function ProductCard({ product }) {
  return (
    <StyledProductCard>
      <Img src={product.image} />
      <Ul>
        <li>
          <Heading as='h5'>{product.name}</Heading>
        </li>
        <li>
          <Heading as='h6'>{product.headline}</Heading>
        </li>
        <li>
          <Heading as='h6'>From ${product.price}</Heading>
        </li>
        <li>
          <StyledLink to={`/${product.link}`} $variation='underline'>
            Shop now
          </StyledLink>
        </li>
      </Ul>
    </StyledProductCard>
  );
}

export default ProductCard;

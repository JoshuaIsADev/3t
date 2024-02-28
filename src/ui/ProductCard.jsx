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
  padding: 1rem;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: end;
`;

function ProductCard({ product }) {
  return (
    <StyledProductCard>
      <Img src={product.image} />
      <Ul>
        <li>
          <Heading as='h4'>{product.name}</Heading>
        </li>
        <li>
          <Heading as='h5'>From ${product.price}</Heading>
        </li>
      </Ul>
      <Ul>
        <li>
          <Heading as='h5'>{product.headline}</Heading>
        </li>
        <li>
          <StyledLink to={`/${product.link}`} $variation='product'>
            Shop now
          </StyledLink>
        </li>
      </Ul>
    </StyledProductCard>
  );
}

export default ProductCard;

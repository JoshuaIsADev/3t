import styled from 'styled-components';
import Heading from './Heading';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
// import StyledLink from './StyledLink';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 700px;
  /* min-width: 400px; */
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

function ProductCard({ product }) {
  console.log(product);
  return (
    <StyledProductCard>
      <Img src={product.image} />
      <Heading as='h7'>{product.name}</Heading>
      <Heading as='h6'>{product.headline}</Heading>
      <Heading as='h10'>from ${product.price}</Heading>
      <Button $variation='configure'>
        <NavLink to={`/${product.link}`}>Configure</NavLink>
      </Button>
    </StyledProductCard>
  );
}

export default ProductCard;

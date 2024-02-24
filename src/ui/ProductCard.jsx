import styled from 'styled-components';
import Heading from './Heading';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import StyledLink from './StyledLink';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
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
  align-items: center;
`;

const Li = styled.li`
  font-size: 1.25rem;
  font-weight: 500;
`;

function ProductCard({ product }) {
  return (
    <StyledProductCard>
      <Img src={product.image} />
      <Ul>
        <Li>{product.name}</Li>
        <Li>From ${product.price}</Li>
      </Ul>
      <Ul>
        <Li>{product.headline}</Li>
        <Li>
          <StyledLink to={`/${product.link}`} $variation='product'>
            Shop now
          </StyledLink>
        </Li>
      </Ul>
    </StyledProductCard>
  );
}

export default ProductCard;

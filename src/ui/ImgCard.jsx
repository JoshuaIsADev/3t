import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  object-fit: cover;
`;

const StyledImgCard = styled.div`
  height: 100%;
  padding: 0;
`;

function ImgCard({ src }) {
  return (
    <StyledImgCard>
      <Img src={src}></Img>
    </StyledImgCard>
  );
}

export default ImgCard;

import styled from 'styled-components';
// import Img from './Img';
import Column from './Column';
import Row from './Row';
import { ButtonGallery } from './Button';

const Img = styled.img`
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%; */
  aspect-ratio: 6/3;
  object-fit: cover;
`;

function Gallery({ src }) {
  console.log(src);

  return (
    <>
      <Row $variation='smallPadding'>
        <Column>
          {src.map((index) => (
            <ButtonGallery key={index}></ButtonGallery>
          ))}
        </Column>
      </Row>
      <Row>
        <Column $variation='fourColumns'>
          {src.map((imageSource, index) => (
            <Img key={index} src={imageSource} />
          ))}
        </Column>
      </Row>
    </>
  );
}

export default Gallery;

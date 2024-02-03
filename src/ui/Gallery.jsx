import styled from 'styled-components';
// import Img from './Img';
import Column from './Column';
import Row from './Row';
import { ButtonGallery } from './Button';
import { useState } from 'react';

const Img = styled.img`
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%; */
  aspect-ratio: 6/3;
  object-fit: cover;
`;

function Gallery({ src }) {
  // const step = 1;
  const [step, setStep] = useState(1);
  // console.log(arr);

  function handleStep(step) {
    setStep(Number(step) + 1);
  }

  return (
    <>
      <Row $variation='smallPadding'>
        <Column $variation='fourColumns'>
          {src.map((index, i) => (
            <ButtonGallery
              key={index}
              $variation={i === step - 1 ? 'active' : ''}
              onClick={() => handleStep(`${i}`)}
            ></ButtonGallery>
          ))}
        </Column>
      </Row>
      <Row>
        <Column $variation='fourColumns'>
          <Img src={src[step - 1]} />
          {/* // {src.map((imageSource, index) => (
            <Img key={index} src={imageSource} />
          ))} */}
        </Column>
      </Row>
    </>
  );
}

export default Gallery;

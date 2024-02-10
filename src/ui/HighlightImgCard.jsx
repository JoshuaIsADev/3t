import styled from 'styled-components';
import Column from './Column';
import Img from './Img';
import Row from './Row';

function HighlightImgCard({ img1, img2, img3, ratio, width, translate }) {
  return (
    <Row>
      <Column $gridColumn='span 4' $variation='center'>
        {img1 ? (
          <Img
            src={img1}
            $variation='highlight'
            $width='40vw'
            $ratio='3/2.2'
            $translate='-10vw'
          />
        ) : null}
        {img2 ? (
          <Img
            src={img2}
            $variation='highlight'
            $width='30vw'
            $ratio='2/1'
            $translate='5vw'
            $margin='0 0 3rem'
          />
        ) : null}
        {img3 ? (
          <Img
            src={img3}
            $variation='highlight'
            $width='45vw'
            $ratio='4/2.2'
            $translate='5vw'
            $margin='10rem 0 0'
          />
        ) : null}
      </Column>
    </Row>
  );
}

export default HighlightImgCard;

// import styled from 'styled-components';
import { Col } from './Columns';

function TextCard({ paragraph }) {
  return (
    <Col $col='1' $span='1'>
      <p>{paragraph}</p>
    </Col>
  );
}

export default TextCard;

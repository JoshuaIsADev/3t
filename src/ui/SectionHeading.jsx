import Column from './Column';
import Heading from './Heading';
import Row from './Row';

function SectionHeading({ heading }) {
  return (
    <Row>
      <Column $gridColumn='2 / span 2' $variation='center'>
        <Heading as='h2'>{heading}</Heading>
      </Column>
    </Row>
  );
}

export default SectionHeading;

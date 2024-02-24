import Column from './Column';
import Heading from './Heading';
import Row from './Row';

function ArticleHeader({ heading, paragraph }) {
  return (
    <article>
      <Row $variation='heading'>
        <Column>
          <Heading as='h2'>{heading}</Heading>
        </Column>
      </Row>
      <Row $variation='paragraph'>
        <Column>
          <p>{paragraph}</p>
        </Column>
      </Row>
    </article>
  );
}

export default ArticleHeader;

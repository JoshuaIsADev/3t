import styled from 'styled-components';
import Column from './Column';
import Heading from './Heading';
import Row from './Row';
import Section from './Section';
import { GoPlus } from 'react-icons/go';
import { IconContext } from 'react-icons';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  max-width: 1000px;
  border-bottom: 1px solid var(--color-grey-900);
  padding: 1rem 0;
  gap: 1rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: end;
  text-align: left;
  width: 100%;
  gap: 20rem;
`;

const ButtonContainer = styled.div`
  transform: translateY(0.6rem);
`;

const Img = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

function SectionDetails({ details, index }) {
  console.log(details);
  return (
    <Section>
      <article>
        <Row>
          <Column $variation='highlight'>
            <Heading as='h3'>{details[0].heading}</Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            {details.map((detail) => (
              <DetailContainer key={index}>
                <DetailRow>
                  <Heading as='h6' $variation='cap'>
                    {detail.heading}
                  </Heading>
                  <IconContext.Provider value={{ size: '2rem' }}>
                    <ButtonContainer>
                      <GoPlus />
                    </ButtonContainer>
                  </IconContext.Provider>
                </DetailRow>
                <DetailRow>
                  <p>{detail.paragraph}</p>
                  <Img src={detail.image} />
                </DetailRow>
              </DetailContainer>
            ))}
          </Column>
        </Row>
      </article>
    </Section>
  );
}

export default SectionDetails;

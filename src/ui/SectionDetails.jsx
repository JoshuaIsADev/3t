import styled from 'styled-components';
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Column from './Column';
import Heading from './Heading';
import Row from './Row';
import Section from './Section';
import { GoPlus } from 'react-icons/go';
import { HiMiniPlus, HiMiniMinus } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import { Button } from './Button';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  max-width: 1000px;
  border-bottom: 1px solid var(--color-grey-900);
  padding: 0 0 2rem;
  gap: 0rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: end;
  text-align: left;
  width: 100%;
  gap: 20rem;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  transform: translateY(0.5rem);
`;

const Img = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  padding-top: 1rem;
`;

function SectionDetails({ details }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

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
            {details.map((detail, index) => {
              const isExpanded = index === expandedIndex;

              return (
                <DetailContainer key={detail.id}>
                  <DetailRow onClick={() => handleClick(index)}>
                    <Heading as='h6' $variation='cap'>
                      {detail.heading}
                    </Heading>
                    <IconContext.Provider value={{ size: '2rem' }}>
                      <ButtonContainer>
                        <Button>
                          {isExpanded ? <HiMiniMinus /> : <HiMiniPlus />}
                        </Button>
                      </ButtonContainer>
                    </IconContext.Provider>
                  </DetailRow>
                  {isExpanded && (
                    <DetailRow>
                      <p>{detail.paragraph}</p>
                      <Img src={detail.image} />
                    </DetailRow>
                  )}
                </DetailContainer>
              );
            })}
          </Column>
        </Row>
      </article>
    </Section>
  );
}

export default SectionDetails;

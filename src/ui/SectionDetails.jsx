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
import ArticleHeader from './ArticleHeader';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: var(--width-max);
  border-bottom: 1px solid var(--color-grey-200);
  padding: 2rem 0 2.6rem;
  gap: 0rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: end;
  text-align: left;
  gap: 20rem;
  width: 100%;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  transform: translateY(0.5rem);
`;

const Img = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-top: 1.5rem;
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
      <ArticleHeader
        heading={details[0].heading}
        paragraph={details[0].paragraph}
      />
      <article>
        <Row>
          <Column $variation='details'>
            {details.slice(1).map((detail, index) => {
              const isExpanded = index === expandedIndex;

              return (
                <DetailContainer key={detail.id}>
                  <DetailRow onClick={() => handleClick(index)}>
                    <Heading as='h4' $variation='cap'>
                      {detail.heading}
                    </Heading>
                    <IconContext.Provider value={{ size: '2rem' }}>
                      <ButtonContainer>
                        <Button $variation='details'>
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

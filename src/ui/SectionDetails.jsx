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
import { motion } from 'framer-motion';

const DetailContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: var(--width-max);
  border-bottom: 1px solid var(--color-grey-200);
  padding: 2rem 0 2.6rem;
  gap: 0rem;
`;

const Hovered = {
  show: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--color-grey-900)',
    transition: { type: 'easeIn', duration: 0.35 },
    zIndex: -10,
  },
  hide: {
    width: '0%',
    height: '100%',
    backgroundColor: 'var(--color-grey-900)',
    transition: { type: 'easeIn', duration: 0.25 },
  },
};

const HoveredRow = {
  show: {
    padding: '0 16px',
    color: 'var(--color-grey-0)',
  },
};

const BlackBg = styled(motion.div)`
  z-index: -10;
  position: absolute;
  top: 0;
  height: 100%;
`;

const DetailRow = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: end;
  text-align: left;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
`;

const TextContainer = styled.div`
  max-width: 600px;
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
                <DetailContainer
                  key={detail.id}
                  whileHover={isExpanded ? 'hide' : 'show'}
                  transition={{
                    duration: 0.4,
                    type: 'ease',
                    stiffness: '300',
                  }}
                >
                  <DetailRow
                    onClick={() => handleClick(index)}
                    variants={HoveredRow}
                  >
                    <Heading as='h4' $variation='cap'>
                      {detail.heading}
                    </Heading>
                    <IconContext.Provider value={{ size: '2rem' }}>
                      <ButtonContainer>
                        <Button $variation='details'>
                          {isExpanded ? (
                            <HiMiniMinus />
                          ) : (
                            <HiMiniPlus
                              style={{
                                backgroundColor: 'black',
                                color: 'white',
                              }}
                            />
                          )}
                        </Button>
                      </ButtonContainer>
                    </IconContext.Provider>
                  </DetailRow>
                  {isExpanded && (
                    <DetailRow>
                      <TextContainer>
                        <p>{detail.paragraph}</p>
                      </TextContainer>
                      <Img src={detail.image} />
                    </DetailRow>
                  )}
                  <BlackBg variants={Hovered} />
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

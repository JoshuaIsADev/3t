import styled from 'styled-components';
import { Column1, Column2, Column3, Column4 } from './Columns';
import Heading from './Heading';

const StyledFooterCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-line);
  width: 100%;
  padding: 0.25rem 0.25rem;
  font-weight: 500;
  color: var(--color-grey-900);
  background-color: var(--background-color-grey);
  font-size: 14px;
  text-transform: uppercase;
`;

const StyledLabel = styled.label`
  border: none;
  color: var(--color-grey-900);
  padding: 0.25rem 0.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

function handleSubmit() {}

function FooterCard({ addresses }) {
  return (
    <StyledFooterCard>
      <Column1>
        <Heading as='h5'>{addresses[0].heading}</Heading>
        <Container>
          <p>{addresses[0].subheading}</p>
          <p>{addresses[0].address}</p>
          <p>{addresses[0].phone}</p>
        </Container>
      </Column1>
      <Column2>
        <Heading as='h5'>{addresses[1].heading}</Heading>
        <Container>
          <p>{addresses[1].subheading}</p>
          <p>{addresses[1].address}</p>
          <p>{addresses[1].phone}</p>
        </Container>
      </Column2>
      <Column3>
        <Heading as='h5'>{addresses[0].heading}</Heading>
        <Container>
          <p>{addresses[2].subheading}</p>
          <p>{addresses[2].address}</p>
          <p>{addresses[2].phone}</p>
        </Container>
      </Column3>
      <Column4>
        <Heading as='h5'>Sign up for our newsletter</Heading>
        <Container>
          <div>
            <StyledInput placeholder='Email' id='newsletter'></StyledInput>
            <StyledLabel htmlFor='newsletter' onClick={handleSubmit}>
              Submit
            </StyledLabel>
          </div>
        </Container>
      </Column4>
    </StyledFooterCard>
  );
}

export default FooterCard;

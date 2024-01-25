import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: var(--color-grey-0);
  z-index: 0;
  position: relative;
`;

const ContentContainer = styled.section`
  display: flex;
  width: 100%;
  gap: 4rem;
  padding: 0 3rem 0 2rem;
  flex-direction: column;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const NewsletterContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-brand);
  gap: 1rem;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-grey-0);
  width: 100%;
  padding: 0;
  font-weight: 600;
  color: var(--color-brand);
  font-size: 3rem;
  text-transform: uppercase;
`;

const StyledLabel = styled.label`
  border: none;
  color: var(--color-grey-0);
  padding: 0;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-brand);
  font-size: 3rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 2rem;
  padding-bottom: 4rem;
`;

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 2rem;
  color: var(--color-brand);
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
const P = styled.p`
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-brand);
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

function Footer() {
  return (
    <StyledFooter>
      <ContentContainer>
        <AddressContainer>
          <AddressBox>
            <H2>American Offices 3t Bike America Inc.</H2>
            <P>160 Bartley Dr. Unit 2, North York, Ontario, M4A 1E1</P>
            <P>Phone: +1 (949) 600.9841 (Mon – Fri; GMT -8)</P>
          </AddressBox>
          <AddressBox>
            <H2>European Offices 3t Cycling SRL</H2>
            <P>Via Leonardo Da Vinci, 1924030 Presezzo (BG) Italy</P>
            <P>Phone: +39.035.4943451 (Mon – Fri; business hours)</P>
          </AddressBox>
          <AddressBox>
            <H2>Asian Offices 3t APAC LTD</H2>
            <P>
              36, Cunzhong St., West Dist., Taichung City, 40349, Taiwan R.O.C
            </P>
            <P>Phone: +886 4.2376.6697 Fax: +886 4.2376.6356</P>
          </AddressBox>
        </AddressContainer>
        <NewsletterContainer>
          <StyledInput
            placeholder='Sign up for our newsletter'
            id='newsletter'
          ></StyledInput>
          <StyledLabel for='newsletter' onClick='submit'>
            Submit
          </StyledLabel>
        </NewsletterContainer>
      </ContentContainer>
    </StyledFooter>
  );
}

export default Footer;

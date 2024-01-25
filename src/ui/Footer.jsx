import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  margin-top: 150vh;
  background-color: var(--color-grey-0);
  z-index: 0;
  position: sticky;
`;

const ContentContainer = styled.section`
  display: flex;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  flex-direction: column;
`;

const NewsletterContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: var(--color-brand);
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-grey-0);
  width: 100%;
  padding: 2rem 3rem;
  margin-bottom: 1rem;
  background-color: var(--color-brand);
  color: var(--color-grey-0);
  font-size: 5rem;
`;

const StyledLabel = styled.label`
  border: none;
  color: var(--color-grey-0);
  padding: 2rem 3rem;
  margin-bottom: 0.5rem;
  color: var(--color-grey-0);
  font-size: 5rem;
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <ContentContainer>
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

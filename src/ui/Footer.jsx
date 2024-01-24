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
`;

const NewsletterContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  border: none;
  padding: 2rem 3rem;
  background-color: var(--color-brand);
  color: var(--color-grey-0);
`;

const StyledLabel = styled.label`
  color: var(--color-grey-0);
  padding: 2rem 3rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <ContentContainer>
        <NewsletterContainer>
          <StyledInput
            value='Sign up for our newsletter'
            id='newsletter'
          ></StyledInput>
          <StyledLabel for='newsletter'>Submit</StyledLabel>
        </NewsletterContainer>
      </ContentContainer>
    </StyledFooter>
  );
}

export default Footer;

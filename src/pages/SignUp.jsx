import styled from 'styled-components';
import Heading from '../ui/Heading';
import { Button } from '../ui/Button';
import FormInput from '../ui/FormInput';
import StyledLink from '../ui/StyledLink';

const StyledSignUp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: var(--width-max);
  min-height: 100vh;
  margin: 0 auto;
  padding: 8rem var(--padding-sides) 2rem;
`;

const HeadingContainer = styled.div`
  width: 100%;
  padding-bottom: 4rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  align-items: flex-end;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const SignUpContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: var(--width-text-max);
  padding-bottom: 2rem;
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const CheckboxInput = styled.input`
  height: 1.5rem;
  width: 1.5rem;
`;

function SignUp() {
  return (
    <>
      <StyledSignUp>
        <HeadingContainer>
          <Heading as='h2'>Create an account</Heading>
        </HeadingContainer>
        <div>
          <SignUpContainer>
            <NewsletterContainer>
              <CheckboxInput
                label='Newsletter'
                placeholder='Your email address'
                type='checkbox'
                required
                name='newsletter'
                defaultValue=''
              />
              <Heading as='h5'>
                Sign up for our newsletter and recieve the latest 3T news and
                releases
              </Heading>
            </NewsletterContainer>
          </SignUpContainer>
          <FormContainer>
            <InputContainer>
              <FormInput
                label='username'
                placeholder='Username'
                type='username'
                required
                name='username'
                defaultValue=''
              />
              <FormInput
                label='email'
                placeholder='Email'
                type='email'
                required
                name='email'
                defaultValue=''
              />
              <FormInput
                label='password'
                placeholder='Password'
                type='password'
                required
                name='password'
                defaultValue=''
              />
              <FormInput
                label='confirmPassword'
                placeholder='Confirm password'
                type='confirmPassword'
                required
                name='confirmPassword'
                defaultValue=''
              />
            </InputContainer>
            <Button $variation='newsletter'>Sign Up</Button>
          </FormContainer>
        </div>
      </StyledSignUp>
    </>
  );
}

export default SignUp;

import styled from 'styled-components';
import Heading from '../ui/Heading';
import { Button } from '../ui/Button';
import FormInput from '../ui/FormInput';

const StyledSignIn = styled.section`
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

function SignIn() {
  return (
    <>
      <StyledSignIn>
        <HeadingContainer>
          <Heading as='h2'>Sign In</Heading>
        </HeadingContainer>
        <div>
          <SignUpContainer>
            <Heading as='h5'>Not yet a member? Sign up</Heading>
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
                label='password'
                placeholder='Password'
                type='password'
                required
                name='password'
                defaultValue=''
              />
            </InputContainer>
            <Button $variation='newsletter'>Sign In</Button>
          </FormContainer>
        </div>
      </StyledSignIn>
    </>
  );
}

export default SignIn;

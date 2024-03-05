import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';

import styled from 'styled-components';
import Heading from '../ui/Heading';
import { Button } from '../ui/Button';
import FormInput from '../ui/FormInput';
import StyledLink from '../ui/StyledLink';
import { useState } from 'react';

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

const defaultFormFields = {
  email: '',
  password: '',
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('email not found');
          break;
        default:
          console.log(error);
      }
      // if (error.code === 'auth/invalid-credential') {
      //   alert('Incorrect password for email');
      // }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <StyledSignIn>
        <HeadingContainer>
          <Heading as='h2'>Sign in to your account</Heading>
        </HeadingContainer>
        <div>
          <SignUpContainer>
            <Heading as='h5'>
              Not yet a 3T member yet?{' '}
              <StyledLink to='/signup' $variation='underline'>
                Create an account.
              </StyledLink>
            </Heading>
          </SignUpContainer>
          <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
              <FormInput
                label='email'
                placeholder='Email'
                type='email'
                required
                name='email'
                value={email}
                onChange={handleChange}
              />
              <FormInput
                label='password'
                placeholder='Password'
                type='password'
                required
                name='password'
                value={password}
                onChange={handleChange}
              />
            </InputContainer>
            <Button $variation='newsletter' type='submit'>
              Sign In
            </Button>
            <Button
              $variation='newsletter'
              type='button'
              onClick={signInWithGoogle}
            >
              Sign In Google
            </Button>
          </FormContainer>
        </div>
      </StyledSignIn>
    </>
  );
}

export default SignIn;

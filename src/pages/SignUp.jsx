import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
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

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  newsletter: '',
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword, newsletter } =
    formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

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
                value={newsletter}
                onChange={handleChange}
              />
              <Heading as='h5'>
                Sign up for our newsletter and recieve the latest 3T news and
                releases
              </Heading>
            </NewsletterContainer>
          </SignUpContainer>
          <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
              <FormInput
                label='displayName'
                placeholder='Display name'
                type='text'
                required
                name='displayName'
                value={displayName}
                onChange={handleChange}
              />
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
              <FormInput
                label='confirm password'
                placeholder='Confirm password'
                type='password'
                required
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
              />
            </InputContainer>
            <Button type='submit' $variation='newsletter'>
              Sign Up
            </Button>
          </FormContainer>
        </div>
      </StyledSignUp>
    </>
  );
}

export default SignUp;

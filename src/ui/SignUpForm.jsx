import { useState } from 'react';
import Heading from './Heading';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import FormInput from './FormInput';
import Section from './Section';
import ArticleHeader from './ArticleHeader';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import { Button } from './Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);

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
        alert('Cannot create user, email already in use');
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
    <article>
      <Row $variation='heading' $paddingBottom='2rem'>
        <Heading as='h2'>Sign up with your email and password</Heading>
      </Row>

      <form onSubmit={handleSubmit}>
        <Row $variation='bottom'>
          <Column $variation='form'>
            <FormInput
              label='Display name'
              placeholder='Display name'
              type='text'
              required
              onChange={handleChange}
              name='displayName'
              value={displayName}
            />

            <FormInput
              label='Email'
              placeholder='Email'
              type='email'
              required
              onChange={handleChange}
              name='email'
              value={email}
            />

            <FormInput
              label='Password'
              placeholder='Password'
              type='password'
              required
              onChange={handleChange}
              name='password'
              value={password}
            />

            <FormInput
              label='ConfirmPassword'
              placeholder='ConfirmPassword'
              type='password'
              required
              onChange={handleChange}
              name='confirmPassword'
              value={confirmPassword}
            />
          </Column>

          <Button $variation='newsletter' type='submit'>
            Sign Up
          </Button>
        </Row>
      </form>
    </article>
  );
}

export default SignUpForm;

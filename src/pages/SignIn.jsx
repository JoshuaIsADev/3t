import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../src/utils/firebase/firebase.utils';
import { Button } from '../ui/Button';
import Heading from '../ui/Heading';
import Section from '../ui/Section';
import SignUpForm from '../ui/SignUpForm';

function SignIn() {
  const logGoogleUser = async function () {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <Section>
        <Heading as='h3'>SignIn</Heading>
        <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
        <SignUpForm />
      </Section>
    </div>
  );
}

export default SignIn;

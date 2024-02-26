import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../src/utils/firebase/firebase.utils';
import { Button } from '../ui/Button';
import Heading from '../ui/Heading';
import Section from '../ui/Section';

function SignIn() {
  const logGoogleUser = async function () {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <Section>
        <Heading as='h2'>SignIn</Heading>
        <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
      </Section>
    </div>
  );
}

export default SignIn;

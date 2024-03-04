import Heading from './Heading';
import footerData from './../data/footerData.json';
import styled from 'styled-components';
import { Button } from './Button';
import FormInput from './FormInput';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: var(--width-max);
  min-height: 100vh;
  margin: 0 auto;
  padding: 8rem var(--padding-sides) 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;

const HeadingContainer = styled.div`
  width: 100%;
  padding-bottom: 4rem;
`;

const AddressesContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: var(--width-text-max);
  padding-bottom: 2rem;
`;

function Footer() {
  const addresses = footerData[0].address;
  return (
    <StyledFooter>
      <HeadingContainer>
        <Heading as='h2'>Sign up for our newsletter</Heading>
      </HeadingContainer>
      <div>
        <AddressesContainer>
          {addresses.map((address) => (
            <div key={address.id}>
              <Heading as='h5'>{address.heading}</Heading>
              <Heading as='h5'>{address.subheading}</Heading>
              <Heading as='h5'>{address.address}</Heading>
              <Heading as='h5'>{address.phone}</Heading>
            </div>
          ))}
        </AddressesContainer>
        <FormContainer>
          <FormInput
            label='Newsletter'
            placeholder='Your email address'
            type='email'
            required
            name='newsletter'
            defaultValue=''
          />
          <Button $variation='newsletter'>Submit</Button>
        </FormContainer>
      </div>
    </StyledFooter>
  );
}

export default Footer;

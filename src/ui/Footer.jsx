import Heading from './Heading';
import Row from './Row';
import Section from './Section';
import footerData from './../data/footerData.json';
import Column from './Column';
import styled from 'styled-components';
import { Button } from './Button';
import FormInput from './FormInput';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  /* padding: 10rem 0 2rem; */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

function Footer() {
  const addresses = footerData[0].address;
  return (
    <footer>
      <Section $variation='footer'>
        <Row $variation='footer'>
          {addresses.map((address) => (
            <Column key={address.id} $variation='footer'>
              <Heading as='h4'>{address.heading}</Heading>
              <p>{address.subheading}</p>
              <p>{address.address}</p>
              <p>{address.phone}</p>
            </Column>
          ))}
        </Row>
        <StyledForm>
          <Row>
            <Column>
              <label htmlFor='email'>
                <Heading as='h2'>Sign up for our newsletter</Heading>
              </label>
            </Column>
          </Row>
          <Row>
            <FormInput
              placeholder='Your email address'
              type='email'
              required
              name='email'
              value=''
            />
            <Button $variation='newsletter'>Submit</Button>
          </Row>
        </StyledForm>
      </Section>
    </footer>
  );
}

export default Footer;

import styled from 'styled-components';
import HeroHeading from './HeroHeading';
import Row from './Row';
import Column from './Column';
import Heading from './Heading';

const footerData = [
  {
    id: 5,
    heading: 'Reach out',
    subheading: 'Contact us globally',
  },
];

const addressDatas = [
  {
    id: 1,
    heading: 'Americas',
    subheading: 'American Offices 3t Bika America Inc.',
    address: '160 Bartley Dr.Unit 2North York, Ontario,M4A 1E1',
    phone: 'Phone: +1 (949) 600.9841 (Mon – Fri; GMT -8)',
  },
  {
    id: 2,
    heading: 'Europe',
    subheading: 'European Offices 3t Cycling SRL',
    address: 'Via Leonardo Da Vinci, 1924030 Presezzo (BG) Italy',
    phone: 'Phone: +39.035.4943451 (Mon – Fri; business hours)',
  },
  {
    id: 3,
    heading: 'Asia',
    subheading: 'Asian Offices 3t APAC LTD',
    address: '36, Cunzhong St., West Dist., Taichung City, 40349, Taiwan R.O.C',
    phone: 'Phone: +886 4.2376.6697 Fax: +886 4.2376.6356',
  },
];

const StyledFooter = styled.footer`
  width: 100vw;
  height: 100vh;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-grey-900);
  width: 100%;
  padding: 0.25rem 0.25rem;
  font-weight: 500;
  color: var(--color-grey-900);
  font-size: 14px;
  text-transform: uppercase;
`;

const StyledLabel = styled.label`
  border: none;
  color: var(--color-grey-900);
  padding: 0.25rem 0.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <HeroHeading
        heading={footerData[0].heading}
        subheading={footerData[0].subheading}
      />
      <Row>
        <Column $variation='fourColumns'>
          <Heading as='h2'>Sign up for our newsletter</Heading>
        </Column>
        <Column $variation=''>
          <StyledInput placeholder='Email' id='newsletter'></StyledInput>
        </Column>
        <Column $variation=''>
          <StyledLabel for='newsletter' onClick='submit'>
            Submit
          </StyledLabel>
        </Column>
      </Row>
      <Row>
        <Column $variation='fourColumns'>
          <Heading as='h2'>Write or call</Heading>
        </Column>
        {addressDatas.map((addressData) => (
          <>
            <Column $variation=''>
              <Heading as='h2'>{addressData.heading}</Heading>
            </Column>
            <Column $variation='threeColumns'>
              <p>{addressData.subheading}</p>
              <p>{addressData.address}</p>
              <p>{addressData.phone}</p>
            </Column>
          </>
        ))}
      </Row>
    </StyledFooter>
  );
}

export default Footer;

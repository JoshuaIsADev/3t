import Section from './Section';

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

function Footer() {
  return (
    <footer>
      <Section $variation='grey'>
        {/* <HeadingContainer
          heading='Reach out'
          subHeading={'Contact us globally'}
        />
        <ArticleContainer>
          <FooterCard addresses={addressDatas} />
        </ArticleContainer> */}
      </Section>
    </footer>
  );
}

export default Footer;

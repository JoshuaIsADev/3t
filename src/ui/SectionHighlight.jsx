import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './Section';
import Row from './Row';
import ArticleHeader from './ArticleHeader';
import { useRef } from 'react';

const ImgContainer = styled.article`
  position: relative;
  width: 100%;
`;

const Img1 = styled.img`
  width: 100%;
  position: relative;
`;

const Img2 = styled.img`
  padding-right: 20vw;
`;

const Img3 = styled.img`
  padding-left: 30vw;
`;
const Img4 = styled.img`
  padding-right: 25vw;
`;

function SectionHighlight({ highlight }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const img1Y = useTransform(scrollYProgress, [0, 1], ['50%', '-250%']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['100%', '-200%']);
  const img3Y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const img4Y = useTransform(scrollYProgress, [0, 1], ['250%', '-50%']);

  return (
    <Section ref={ref}>
      <ArticleHeader
        heading={highlight.heading}
        paragraph={highlight.paragraph}
      />
      {/* <ImgContainer> */}
      <motion.div
        style={{ y: img1Y }}
        transition={{ ease: 'easeInOut', type: 'spring', duration: 0 }}
      >
        <Row $variation='right'>
          <Img1 src={highlight.image[0]} />
        </Row>
      </motion.div>
      <motion.div
        style={{ y: img2Y }}
        transition={{ ease: 'easeInOut', type: 'spring', duration: 0 }}
      >
        <Row $variation='left'>
          <Img2 src={highlight.image[1]} />
        </Row>
      </motion.div>
      <motion.div
        style={{ y: img3Y }}
        transition={{ ease: 'easeInOut', type: 'spring', duration: 0 }}
      >
        <Row $variation='right'>
          <Img3 src={highlight.image[2]} />
        </Row>
      </motion.div>
      <motion.div
        style={{ y: img4Y }}
        transition={{ ease: 'easeInOut', type: 'spring', duration: 0 }}
      >
        <Row $variation='left'>
          <Img4 src={highlight.image[3]} />
        </Row>
      </motion.div>
      {/* </ImgContainer> */}
    </Section>
  );
}

export default SectionHighlight;

import React from 'react';
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <h1 className="typeEffect">Hello...</h1>
      <SectionTitle main center>
        I am Tanmoy Joy
      </SectionTitle>
      <SectionText>
        I am a full stack web developer experienced in Django and ReactJs
      </SectionText>
      <Link href="#footer">
      <Button>
      Contact Me  
      </Button></Link>
      
    </LeftSection>
  </Section>
);

export default Hero;
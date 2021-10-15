import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a guy from Colombia who live in Barranquilla and love the technology and want to make impact on the world throughtout of this.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More about me

      </Button>
    </LeftSection>

  </Section>

);

export default Hero;
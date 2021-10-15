import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ServicesStyles';

const data = [
  { name: "Responsive Design", text: 'The apps are 100% responsive for the different screen devices.' },
  { name: "Front-end Design", text: 'Work with tecnologies as React, Angulars.', },
  { name: "Back-end Design", text: 'Capable of working with different tecnologies according to the client needs.', },

];

const Servicess = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Services</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <br />
        </Box>
      ))}
    </Boxes>


  </Section>
);

export default Servicess;

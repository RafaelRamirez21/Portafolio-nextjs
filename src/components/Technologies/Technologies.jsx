import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">

    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a bunch of technologies in the web development world. From Front-end To Back-end.

    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" color={"#6b3030"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            Angular <br />
            Css/Saas/styled-components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" color={"#6b3030"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node <br />
            Django <br />
            Database

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" color={"#6b3030"} />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem" color={"#6b3030"} />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python <br />
            Matlab <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>


  </Section>
);

export default Technologies;

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Img1, Span } from './HeaderStyles';
const Header = () => {
  const navSection = [

    {
      id: 1,
      title: 'About',
      path: '#about'
    },
    {
      id: 2,
      title: 'Projects',
      path: '#projects'

    },
    {
      id: 3,
      title: 'technologies',
      path: '#tech'
    },
    {
      id: 4,
      title: 'Contact',
      path: '#contact'
    },

  ];

  const socialMedia = [
    {
      id: 1,
      icon: <AiFillGithub />,
      path: 'https://github.com/RafaelRamirez21'
    },
    {
      id: 2,
      icon: <AiFillLinkedin />,
      path: 'https://www.linkedin.com/in/rafael-ricardo-ram%C3%ADrez-burgos-9890a8191/'
    },

  ]
  return (

    <Container>
      <Div1>

        <Link href="/">
          <a style={{
            display: "flex",
            alignItems: "center",
            color: 'black',


          }}>
            <Img1 src="/images/logo.svg" alt="logo-rrrb" /><Span>RafaRRB</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        {navSection.map((section) => (
          <li key={section.id}>
            <Link href={section.path}>
              <NavLink>{section.title}</NavLink>
            </Link>
          </li>

        ))}
      </Div2>

      <Div3>
        {socialMedia.map((media) => (
          <SocialIcons key={media.id} href={media.path}>
            {media.icon}
          </SocialIcons>
        ))

        }

      </Div3>

    </Container>)
};

export default Header;



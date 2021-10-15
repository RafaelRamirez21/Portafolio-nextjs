import { IoIosArrowDropdown } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Span = styled.span`
font-size: 2rem;



`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Img1 = styled.img`
  width:34px;
  height:27px;
  
`;
export const Title = styled.h3`
  
`;






export const Div2 = styled.div`
  grid-area: 1 / 2 / 1 / 6;
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  };

`;
export const Div3 = styled.div`
  grid-area: 1 / 6 / 2 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
display: block;
  font-size: 1.5rem;
  line-height: 32px;
  color: black;
  transition: 0.4s ease;

  &:hover {
    color: #46474B;
    opacity: 1;
    cursor: pointer;
    background-color: #e8e0df;
    transform: scale(1.2);
    border-radius: 20px;
    padding: 0 9px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }

`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: black;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #e8e0df;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`
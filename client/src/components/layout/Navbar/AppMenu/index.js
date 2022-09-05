import { useState } from 'react';
import styled from 'styled-components/macro';
import NavigationItems from '../NavigationItems';

const StyledAppMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 300;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    background-color: black;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const AppMenu = () => {
  const [openAppMenu, setOpenAppMenu] = useState(false);

  const handleMenuToggle = () => setOpenAppMenu(!openAppMenu);
  const handleMenuClose = () => setOpenAppMenu(false);

  return (
    <>
      <StyledAppMenu open={openAppMenu} onClick={handleMenuToggle}>
        <div />
        <div />
        <div />
      </StyledAppMenu>
      <NavigationItems open={openAppMenu} handleMenuClose={handleMenuClose} />
    </>
  );
};

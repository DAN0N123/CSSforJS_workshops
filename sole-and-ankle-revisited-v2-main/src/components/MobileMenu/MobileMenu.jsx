import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <InnerMenu>
        <Close onClick={onDismiss}>
          <Icon id="close" />
        </Close>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </InnerMenu>
    </Wrapper>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 400;
  color: ${COLORS.gray[700]};
  font-size: 14px;
`;
const NavLink = styled.a`
  &:first-of-type {
    color: var(--secondary);
  }
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
`;

const Close = styled.div`
  width: fit-content;
  align-self: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  padding-left: 20%;
  z-index: 1000;
  inset: 0;
  background-color: #00000070;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
`;

const InnerMenu = styled.div`
  background-color: white;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  height: 100%;
`;

export default MobileMenu;

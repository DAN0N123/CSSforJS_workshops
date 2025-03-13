import React from "react";
import styled from "styled-components";

import { BREAKPOINTS, COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <IconButton>
            <Icon id="shopping-bag" />
          </IconButton>
          <IconButton>
            <Icon id="search" />
          </IconButton>
          <IconButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </IconButton>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  svg {
    pointer-events: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  overflow-x: auto;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 4vw;
  margin: 0px 48px;

  ${IconButton} {
    display: none;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    ${IconButton} {
      display: revert;
    }
    width: 100%;
    justify-content: flex-end;
    gap: 36px;
    margin-right: 24px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin-right: 0px;
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

export default Header;

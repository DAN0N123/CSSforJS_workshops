import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href="/sale" n={1}>
              Sale
            </NavLink>
            <NavLink href="/new" n={2}>
              New&nbsp;Releases
            </NavLink>
            <NavLink href="/men" n={3}>
              Men
            </NavLink>
            <NavLink href="/women" n={4}>
              Women
            </NavLink>
            <NavLink href="/kids" n={5}>
              Kids
            </NavLink>
            <NavLink href="/collections" n={6}>
              Collections
            </NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0
    }
  100% {
    opacity: 1
    }
`;

const menuSlideIn = keyframes`
  0% {
    transform: translateX(100%)
  }

  100% {
    transform: translateX(0)
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms cubic-bezier(0.34, 1.15, 1, 0.91) both;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  animation: ${menuSlideIn} 500ms cubic-bezier(0.34, 1.15, 1, 0.91) both;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  animation: ${fadeIn} 500ms 250ms cubic-bezier(0.34, 1.15, 1, 0.91) both;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: ${fadeIn} 400ms ${({ n }) => 250 + 80 * n}ms
    cubic-bezier(0.34, 1.15, 1, 0.91) both;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  animation: ${fadeIn} 500ms 250ms cubic-bezier(0.34, 1.15, 1, 0.91) both;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;

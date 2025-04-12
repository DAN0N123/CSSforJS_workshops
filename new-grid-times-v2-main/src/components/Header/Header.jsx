import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { COLORS, FAMILIES, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeWrapper>
        <SubscribeButton> SUBSCRIBE </SubscribeButton>
        <SubscribeText> Already a subscriber? </SubscribeText>
      </SubscribeWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(MaxWidthWrapper)`
  padding: 0;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    background: revert;
    color: ${COLORS.gray[900]};
  }
`;
const SubscribeWrapper = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const SubscribeButton = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  padding: 12px 24px;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 2px;
`;

const SubscribeText = styled.p`
  color: ${COLORS.gray[900]};
  text-decoration: underline;
  font-style: italic;
  font-size: 14px;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  @media ${QUERIES.desktopAndUp} {
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  @media ${QUERIES.desktopAndUp} {
    &:last-child {
      display: none;
    }
    justify-content: flex-start;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;

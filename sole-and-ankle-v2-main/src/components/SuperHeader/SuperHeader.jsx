import React from "react";
import styled from "styled-components";

import { COLORS, BREAKPOINTS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 1rem;
  font-size: 0.875rem;
  width: 100%;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  & ${MarketingMessage} {
    margin-right: auto;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;

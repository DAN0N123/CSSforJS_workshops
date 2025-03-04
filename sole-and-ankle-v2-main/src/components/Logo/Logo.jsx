import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 32px;
`;

export default Logo;

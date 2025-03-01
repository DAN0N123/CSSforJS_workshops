import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--height": size === "small" ? "24px" : "36px",
        "--border-thickness": size === "small" ? "1px" : "2px",
      }}
    >
      <Icon
        id={icon}
        size={size === "small" ? "16px" : "24px"}
        strokeWidth={2}
      />
      <VisuallyHidden> {label} </VisuallyHidden>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: var(--width);
  border-bottom: var(--border-thickness) solid black;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid -webkit-focus-ring-color; /* Chrome, Safari default */
    outline: 2px solid Highlight; /* Edge default */
    outline: 2px solid -moz-mac-focusring; /* Firefox on macOS */
    outline: 2px solid black; /* Fallback for other browsers */
    outline-offset: 2px;
  }
`;
const Input = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;

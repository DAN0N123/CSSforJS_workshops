/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const isNear = value > 96;
  return (
    <Wrapper
      max={100}
      size={size}
      value={value}
      isNear={isNear}
      style={{
        "--border-radius": size === "large" ? "8px" : "4px",
        "--padding": size === "large" ? "2px" : "0",
      }}
    >
      <VisuallyHidden> {value} out of 100</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  height: ${(p) => {
    if (p.size === "small") return "8px";
    else if (p.size === "medium") return "12px";
    else if (p.size === "large") return "24px";
    else return "12px";
  }};
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--border-radius);
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--border-radius)
      ${(p) =>
        p.isNear ? "var(--border-radius) var(--border-radius)" : "0 0 "}
      var(--border-radius);
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: var(--border-radius)
      ${(p) =>
        p.isNear ? "var(--border-radius) var(--border-radius)" : "0 0 "}
      var(--border-radius);
  }

  &::-ms-fill {
    background-color: ${COLORS.primary};
    border-radius: var(--border-radius)
      ${(p) =>
        p.isNear ? "var(--border-radius) var(--border-radius)" : "0 0 "}
      var(--border-radius);
  }
`;

export default ProgressBar;

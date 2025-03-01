import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden> {label} </VisuallyHidden>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Icon id="chevron-down" size="12px" strokeWidth={2} className="icon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  & > .icon {
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black};
    svg {
      color: ${COLORS.black};
    }
  }

  &:focus-within {
    outline: 2px solid -webkit-focus-ring-color; /* Chrome, Safari default */
    outline: 2px solid Highlight; /* Edge default */
    outline: 2px solid -moz-mac-focusring; /* Firefox on macOS */
    outline: 2px solid black; /* Fallback for other browsers */
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  -webkit-appearance: none;
  color: inherit;
  -moz-appearance: none;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: none;
  }

  border: none;
`;

export default Select;

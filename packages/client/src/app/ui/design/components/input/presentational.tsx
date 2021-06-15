import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  readonly inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

// ------------------------------------
// Component
// ------------------------------------

const Input: React.VFC<Props> = (props) => (
  <StyledWrap>
    <StyledInput {...props.inputProps} />
  </StyledWrap>
);

export const Component = React.memo(Input);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div``;

const StyledInput = styled.input`
  padding: 12px;
  border-color: orange;
  border-style: solid;
  border-radius: 4px;
`;

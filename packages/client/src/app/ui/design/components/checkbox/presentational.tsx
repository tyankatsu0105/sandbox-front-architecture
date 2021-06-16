import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  readonly inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type'
  >;
};

// ------------------------------------
// Component
// ------------------------------------

const Checkbox: React.VFC<Props> = (props) => (
  <StyledWrap>
    <StyledInput type="checkbox" {...props.inputProps} />
  </StyledWrap>
);

export const Component = React.memo(Checkbox);

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

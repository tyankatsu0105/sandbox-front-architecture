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

const TextField: React.VFC<Props> = (props) => (
  <StyledWrap>
    <StyledInput type="text" {...props.inputProps} />
  </StyledWrap>
);

export const Component = React.memo(TextField);

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

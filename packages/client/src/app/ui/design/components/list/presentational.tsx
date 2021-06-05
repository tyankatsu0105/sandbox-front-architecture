import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Component
// ------------------------------------

const List: React.FC = (props) => <StyledWrap>{props.children}</StyledWrap>;

export const Component = React.memo<typeof List>(List);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  display: flex;
`;

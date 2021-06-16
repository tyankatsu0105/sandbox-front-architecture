import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  body?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;

// ------------------------------------
// Component
// ------------------------------------

export const Card = (props: Props) => (
  <StyledWrap className={props.className}>
    {props.header && renderHeader({ header: props.header })}
    {props.body && renderBody({ body: props.body })}
    {props.footer && renderFooter({ footer: props.footer })}
  </StyledWrap>
);

export const Component = React.memo(Card);

// ------------------------------------
// renderHeader
// ------------------------------------

type RenderHeaderProps = {
  header: Props['header'];
};
const renderHeader = (props: RenderHeaderProps) => (
  <StyledHeader>{props.header}</StyledHeader>
);

// ------------------------------------
// renderBody
// ------------------------------------

type RenderBodyProps = {
  body: Props['body'];
};
const renderBody = (props: RenderBodyProps) => (
  <StyledBody>{props.body}</StyledBody>
);

// ------------------------------------
// renderFooter
// ------------------------------------

type RenderFooterProps = {
  footer: Props['footer'];
};
const renderFooter = (props: RenderFooterProps) => (
  <StyledFooter>{props.footer}</StyledFooter>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  box-shadow: 0 0 6px #ccc;
  border-radius: 6px;
`;

const StyledHeader = styled.div`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const StyledBody = styled.div`
  padding: 12px;
`;

const StyledFooter = styled.div`
  padding: 12px;
  border-top: 1px solid #eee;
`;

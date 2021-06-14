import * as React from 'react';
import styled from 'styled-components';

import * as Entity from '~client/app/application/businesses/todos/entity';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  todos: Entity.Todo[];
};

// ------------------------------------
// Component
// ------------------------------------

const TodoList = (props: Props) => (
  <>
    {props.todos.map((todo) => (
      <StyledWrap key={todo.id}>
        <Components.Card.Component
          body={<Body todo={todo} />}
          header={<Header todo={todo} />}
        />
      </StyledWrap>
    ))}
  </>
);

export const Component = React.memo(TodoList);

// ------------------------------------
// Header
// ------------------------------------

type HeaderProps = {
  todo: Props['todos'][number];
};

const HeaderComponent = (props: HeaderProps) => (
  <div>
    <p>updatedAt {props.todo.updatedAt}</p>
    <p>createdAt {props.todo.createdAt}</p>
  </div>
);
/**
 * depends on {@link TodoList}
 */
const Header = React.memo(HeaderComponent);

// ------------------------------------
// Body
// ------------------------------------

type BodyProps = {
  todo: Props['todos'][number];
};
/**
 * depends on {@link TodoList}
 */
const BodyComponent = (props: BodyProps) => <p>{props.todo.description}</p>;
const Body = React.memo(BodyComponent);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  padding: 20px;
`;

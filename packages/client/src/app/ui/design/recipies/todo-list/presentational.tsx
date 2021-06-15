import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';
import styled from 'styled-components';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Presenter from '~client/app/application/businesses/todos/presenter';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  editFormsHandler: ReactHookForm.UseFieldArrayReturn<Presenter.EditInputArray>;
  remove: (values: { id: Entity.Todo['id']; index: number }) => void;
  update: (values: {
    id: Entity.Todo['id'];
    isDone: Entity.Todo['isDone'];
  }) => void;
};

// ------------------------------------
// Component
// ------------------------------------

const TodoList = (props: Props) => {
  return (
    <>
      {props.editFormsHandler.fields.map((todo) => (
        <StyledWrap key={todo.id}>
          <Components.Card.Component
            body={<Body todo={todo} />}
            header={<Header todo={todo} />}
          />
        </StyledWrap>
      ))}
    </>
  );
};

export const Component = React.memo(TodoList);

// ------------------------------------
// Header
// ------------------------------------

type HeaderProps = {
  todo: Props['editFormsHandler']['fields'][number];
};

const HeaderComponent = (props: HeaderProps) => (
  <Flex>
    <div>
      <p>updatedAt {props.todo.updatedAt}</p>
      <p>createdAt {props.todo.createdAt}</p>
    </div>
    <div>
      <p>updatedAt {props.todo.updatedAt}</p>
      <p>createdAt {props.todo.createdAt}</p>
    </div>
  </Flex>
);
/**
 * depends on {@link TodoList}
 */
const Header = React.memo(HeaderComponent);

// ------------------------------------
// Body
// ------------------------------------

type BodyProps = {
  todo: Props['editFormsHandler']['fields'][number];
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

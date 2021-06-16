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
  editFormHandler: ReactHookForm.UseFormReturn<Presenter.EditInputArray>;
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
      {props.editFormsHandler.fields.map((todo, index) => (
        <StyledWrap key={todo.id}>
          <StyledCard
            body={<Body todo={todo} />}
            header={
              <Header
                editFormHandler={props.editFormHandler}
                index={index}
                remove={props.remove}
                todo={todo}
                update={props.update}
              />
            }
            isDone={todo.isDone}
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
  editFormHandler: Props['editFormHandler'];
  index: number;
  remove: Props['remove'];
  todo: Props['editFormsHandler']['fields'][number];
  update: Props['update'];
};

const HeaderComponent = (props: HeaderProps) => {
  const handleChange = React.useCallback(() => {
    const result = props.editFormHandler.getValues(`todos.${props.index}`);
    props.update({ id: result.id, isDone: !result.isDone });
  }, [props.editFormHandler]);

  const handleRemove = React.useCallback(() => {
    const result = props.editFormHandler.getValues(`todos.${props.index}`);
    props.remove({ id: result.id, index: props.index });
  }, [props.editFormHandler]);
  return (
    <HeaderWrap>
      <Flex>
        <div>
          <p>updatedAt {props.todo.updatedAt}</p>
          <p>createdAt {props.todo.createdAt}</p>
        </div>
        <div>
          <div>
            <label htmlFor={`todos.${props.index}.isDone`}>Done</label>
            <Components.Checkbox.Component
              inputProps={{
                ...props.editFormHandler.register(
                  `todos.${props.index}.isDone`
                ),
                checked: props.todo.isDone,
                id: `todos.${props.index}.isDone`,
                onChange: handleChange,
              }}
            />
          </div>
        </div>
      </Flex>

      <Remove onClick={handleRemove}>✖</Remove>
    </HeaderWrap>
  );
};
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
type StyledCardProps = {
  isDone: Props['editFormsHandler']['fields'][number]['isDone'];
};
const StyledCard = styled(Components.Card.Component)<StyledCardProps>`
  background-color: ${(props) => props.isDone && '#ccc'};
`;

const StyledWrap = styled.div`
  padding: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderWrap = styled.div`
  position: relative;
`;

const Remove = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
`;

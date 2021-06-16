import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Presenter from '~client/app/application/businesses/todos/presenter';
import * as Design from '~client/app/ui/design';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  create: () => void;
  createFormHandler: ReactHookForm.UseFormReturn<Presenter.CreteInputValues>;
  editFormHandler: ReactHookForm.UseFormReturn<Presenter.EditInputArray>;
  editFormsHandler: ReactHookForm.UseFieldArrayReturn<Presenter.EditInputArray>;
  fetchMoreTodos: () => void;
  remove: (values: { id: Entity.Todo['id']; index: number }) => void;
  todos: Entity.Todo[];
  update: (values: {
    id: Entity.Todo['id'];
    isDone: Entity.Todo['isDone'];
  }) => void;
};

// ------------------------------------
// Component
// ------------------------------------

const Todos = (props: Props) => (
  <>
    <Design.Layouts.Header.Component />

    <Design.Recipies.CreateTodoForm.Component
      create={props.create}
      createFormHandler={props.createFormHandler}
    />

    <button onClick={props.fetchMoreTodos} type="button">
      fetch more
    </button>
    <Design.Recipies.TodoList.Component
      editFormHandler={props.editFormHandler}
      editFormsHandler={props.editFormsHandler}
      remove={props.remove}
      update={props.update}
    />
  </>
);

export const Component = React.memo(Todos);

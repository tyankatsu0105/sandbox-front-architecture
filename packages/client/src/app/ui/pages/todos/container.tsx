import * as React from 'react';

import * as Presentational from './presentational';
import { useForm, usePage } from './usePage';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  const { fetchMoreTodos, todos } = usePage();
  const {
    create,
    createFormHandler,
    editFormHandler,
    editFormsHandler,
    remove,
    update,
  } = useForm();

  return (
    <Presentational.Component
      create={create}
      createFormHandler={createFormHandler}
      editFormHandler={editFormHandler}
      editFormsHandler={editFormsHandler}
      fetchMoreTodos={fetchMoreTodos}
      remove={remove}
      todos={todos}
      update={update}
    />
  );
};

import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';
import * as ReactRedux from 'react-redux';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Presenter from '~client/app/application/businesses/todos/presenter';
import * as StoreTodos from '~client/app/ui/store/domain/todos';

// ------------------------------------
// usePage
// ------------------------------------

export const usePage = () => {
  const dispatch = ReactRedux.useDispatch();
  const todos = ReactRedux.useSelector(StoreTodos.allSelector);

  React.useEffect(() => {
    dispatch(StoreTodos.fetchTodos({}));
  }, [dispatch]);

  React.useEffect(() => {
    return () => {
      dispatch(StoreTodos.actions.toInitialState());
    };
  }, []);

  const fetchMoreTodos = React.useCallback(() => {
    dispatch(StoreTodos.fetchMoreTodos());
  }, [dispatch]);

  return { fetchMoreTodos, todos };
};

// ------------------------------------
// useForm
// ------------------------------------

export const useForm = () => {
  const dispatch = ReactRedux.useDispatch();
  const initialFormValues = ReactRedux.useSelector(StoreTodos.allSelector);

  const createFormHandler = ReactHookForm.useForm<Presenter.CreteInputValues>();
  const editFormHandler = ReactHookForm.useForm<Presenter.EditInputArray>({
    defaultValues: {
      todos: initialFormValues,
    },
  });

  const editFormsHandler = ReactHookForm.useFieldArray({
    control: editFormHandler.control,
    name: 'todos',
  });

  /**
   * reinitialize defaultValues
   */
  React.useEffect(() => {
    editFormHandler.reset({
      todos: initialFormValues,
    });
  }, [initialFormValues]);

  const onCreate: ReactHookForm.SubmitHandler<Presenter.CreteInputValues> =
    React.useCallback(
      (values) => {
        dispatch(
          StoreTodos.createTodo({
            description: values.description,
          })
        );
      },
      [dispatch, editFormsHandler]
    );

  const create = createFormHandler.handleSubmit(onCreate);
  const remove = (values: { id: Entity.Todo['id']; index: number }) => {
    editFormsHandler.remove(values.index);
    dispatch(
      StoreTodos.removeTodo({
        id: values.id,
      })
    );
  };

  const update = React.useCallback(
    (values: { id: Entity.Todo['id']; isDone: Entity.Todo['isDone'] }) => {
      dispatch(
        StoreTodos.updateTodo({
          id: values.id,
          isDone: values.isDone,
        })
      );
    },
    [dispatch]
  );

  return {
    create,
    createFormHandler,
    editFormHandler,
    editFormsHandler,
    remove,
    update,
  };
};

import * as React from 'react';
import * as ReactRedux from 'react-redux';

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

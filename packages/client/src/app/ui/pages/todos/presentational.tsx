import * as React from 'react';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Design from '~client/app/ui/design';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  fetchMoreTodos: () => void;
  todos: Entity.Todo[];
};

// ------------------------------------
// Component
// ------------------------------------

const Users = (props: Props) => (
  <>
    <Design.Layouts.Header.Component />

    <button onClick={props.fetchMoreTodos} type="button">
      fetch more
    </button>
    {/* <Design.Recipies.UserList.Component users={props.users} /> */}
  </>
);

export const Component = React.memo(Users);

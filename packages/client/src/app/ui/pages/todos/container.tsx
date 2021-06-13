import * as React from 'react';

import * as Presentational from './presentational';
import { usePage } from './usePage';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  const { fetchMoreTodos, todos } = usePage();

  return (
    <Presentational.Component fetchMoreTodos={fetchMoreTodos} todos={todos} />
  );
};

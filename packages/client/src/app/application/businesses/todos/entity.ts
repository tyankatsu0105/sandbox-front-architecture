import * as Connection from '~client/app/application/types/connection';
import * as TypesTodo from '~client/app/application/types/todo';

export type Todo = {
  readonly createdAt: TypesTodo.Todo['createdAt'];
  readonly description: TypesTodo.Todo['description'];
  readonly id: TypesTodo.Todo['id'];
  readonly isDone: TypesTodo.Todo['isDone'];
  readonly updatedAt: TypesTodo.Todo['updatedAt'];
};

export type PageInfo = Connection.PageInfo;

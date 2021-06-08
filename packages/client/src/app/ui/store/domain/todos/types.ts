import * as Entity from '~client/app/application/businesses/todos/entity';
import * as UtilityTypes from '~client/app/application/shared/utility-types';
import * as Connection from '~client/app/application/types/connection';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = {
  entities: UtilityTypes.Entities<Entity.Todo>['entities'];
  ids: UtilityTypes.Entities<Entity.Todo>['ids'];
  pageInfo: Connection.PageInfo;
  status: Status.Status;
  totalCount: Connection.TotalCount;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    createTodo: {
      description: Entity.Todo['description'];
    };
    fetchMoreTodos: void;
    fetchTodos: {
      pageInfo: Connection.PageInfo;
      todos: Entity.Todo[] | null;
      totalCount: Connection.TotalCount;
    };
    removeTodo: {
      id: Entity.Todo['id'];
    };
    updateTodo: {
      id: Entity.Todo['id'];
      isDone: Entity.Todo['isDone'];
    };
  };
};

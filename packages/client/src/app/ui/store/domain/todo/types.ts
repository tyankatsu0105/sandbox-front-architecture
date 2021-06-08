import * as Entity from '~client/app/application/businesses/todo/entity';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = {
  createdAt: Entity.Todo['createdAt'];
  description: Entity.Todo['description'];
  id: Entity.Todo['id'];
  isDone: Entity.Todo['isDone'];
  status: Status.Status;
  updatedAt: Entity.Todo['updatedAt'];
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchTodo: { id: Entity.Todo['id'] };
  };
};

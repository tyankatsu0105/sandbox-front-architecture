import * as Entity from './entity';

export type CreteInputValues = {
  description: Entity.Todo['description'];
};

export type EditInputValues = Entity.Todo;

export type EditInputArray = {
  todos: EditInputValues[];
};

import * as Entity from '../entity';

export interface TodoRepository {
  toEntityTodo: Entity.Todo | null;
}

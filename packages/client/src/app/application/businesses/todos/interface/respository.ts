import * as Entity from '../entity';

export interface TodosRepository {
  toEntityTodos: Entity.Todo[] | null;
}
export interface CreateTodoRepository {
  toEntityTodo: Entity.Todo | null;
}
export interface UpdateTodoRepository {
  toEntityTodo: Pick<Entity.Todo, 'id' | 'isDone' | 'updatedAt'> | null;
}
export interface RemoveTodoRepository {
  toEntityTodo: Pick<Entity.Todo, 'id'> | null;
}

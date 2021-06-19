import * as GraphQLTypes from '~client/app/application/types/gen/api';
import * as Scalars from '~client/app/application/types/scalars';

import * as Entity from './entity';
import * as Interface from './interface';

export class TodosRepository implements Interface.TodosRepository {
  constructor(public data: GraphQLTypes.TodosQuery) {}

  get toEntityTodos(): Entity.Todo[] | null {
    if (this.data.todos.edges == null) return null;

    return this.data.todos.edges.map((edge) => {
      return {
        createdAt: new Scalars.ScalarDateTime(
          edge.node.createdAt
        ).getFormattedValue('yyyy-MM-dd HH:mm'),
        description: edge.node.description,
        id: new Scalars.ScalarID(edge.node.id).id,
        isDone: edge.node.isDone,
        updatedAt:
          edge.node.updatedAt != null
            ? new Scalars.ScalarDateTime(edge.node.updatedAt).getFormattedValue(
                'yyyy-MM-dd HH:mm'
              )
            : '',
      };
    });
  }

  get toEntityPageInfo(): Entity.PageInfo {
    return {
      endCursor: this.data.todos.pageInfo.endCursor,
      hasNextPage: this.data.todos.pageInfo.hasNextPage,
      hasPreviousPage: this.data.todos.pageInfo.hasPreviousPage,
      startCursor: this.data.todos.pageInfo.startCursor,
    };
  }
}

export class CreateTodoRepository implements Interface.CreateTodoRepository {
  constructor(public data: GraphQLTypes.CreateTodoMutation) {}

  get toEntityTodo(): Entity.Todo | null {
    const todo = this.data.createTodo.todo;
    if (todo == null) return null;

    return {
      createdAt: new Scalars.ScalarDateTime(todo.createdAt).getFormattedValue(
        'yyyy-MM-dd HH:mm'
      ),
      description: todo.description,
      id: new Scalars.ScalarID(todo.id).id,
      isDone: todo.isDone,
      updatedAt:
        todo.updatedAt != null
          ? new Scalars.ScalarDateTime(todo.updatedAt).getFormattedValue(
              'yyyy-MM-dd HH:mm'
            )
          : '',
    };
  }
}

export class UpdateTodoRepository implements Interface.UpdateTodoRepository {
  constructor(public data: GraphQLTypes.UpdateTodoMutation) {}

  get toEntityTodo(): Pick<Entity.Todo, 'id' | 'isDone' | 'updatedAt'> | null {
    const todo = this.data.updateTodo.todo;
    if (todo == null) return null;

    return {
      id: new Scalars.ScalarID(todo.id).id,
      isDone: todo.isDone,
      updatedAt:
        todo.updatedAt != null
          ? new Scalars.ScalarDateTime(todo.updatedAt).getFormattedValue(
              'yyyy-MM-dd HH:mm'
            )
          : '',
    };
  }
}

export class RemoveTodoRepository implements Interface.RemoveTodoRepository {
  constructor(public data: GraphQLTypes.RemoveTodoMutation) {}

  get toEntityTodo(): Pick<Entity.Todo, 'id'> | null {
    const todo = this.data.removeTodo.todo;
    if (todo == null) return null;

    return {
      id: new Scalars.ScalarID(todo.id).id,
    };
  }
}

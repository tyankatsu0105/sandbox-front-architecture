import * as GraphQLTypes from '~client/app/application/types/gen/api';
import * as Scalars from '~client/app/application/types/scalars';

import * as Entity from './entity';
import * as Interface from './interface';

export class TodoRepository implements Interface.TodoRepository {
  constructor(public data: GraphQLTypes.TodoQuery) {}

  get toEntityTodo(): Entity.Todo | null {
    if (this.data.node == null) return null;

    return {
      ...this.data.node,
      createdAt: new Scalars.ScalarDateTime(
        this.data.node.createdAt
      ).getFormattedValue('yyy/MM/dd HH:mm:ss'),
      updatedAt: this.data.node.updatedAt
        ? new Scalars.ScalarDateTime(
            this.data.node.updatedAt
          ).getFormattedValue('yyy/MM/dd HH:mm:ss')
        : '',
    };
  }
}

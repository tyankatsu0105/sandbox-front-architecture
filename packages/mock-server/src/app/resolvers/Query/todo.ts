import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['todo'] = (_, args) => {
  return Todo.applyArgs(Mocks.todos, args);
};

class Todo {
  public static applyArgs(
    data: GraphQLTypes.Todo[],
    args: GraphQLTypes.QueryTodoArgs
  ): Utilities.Maybe<GraphQLTypes.Todo> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Todo[],
    id: GraphQLTypes.QueryTodoArgs['id']
  ): Utilities.Maybe<GraphQLTypes.Todo> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}

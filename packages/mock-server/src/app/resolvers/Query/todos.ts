import * as Mocks from '../../mocks';
import { applyPagination } from '../../shared/modules/relay';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['todos'] = (_, args) => {
  return applyPagination(Todos.applyArgs(Mocks.todos, args), args.page);
};

class Todos {
  public static applyArgs(
    data: GraphQLTypes.Todo[],
    args: GraphQLTypes.RequireFields<GraphQLTypes.QueryTodosArgs, 'page'>
  ): GraphQLTypes.Todo[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Todo[],
    ids?: GraphQLTypes.QueryTodosArgs['ids']
  ): GraphQLTypes.Todo[] {
    if (!ids) return data;

    const result = ids.map((id) => data.find((item) => item.id === id));
    return Utilities.toNonNullableArray(result);
  }
}

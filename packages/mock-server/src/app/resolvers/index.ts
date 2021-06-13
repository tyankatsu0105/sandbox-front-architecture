import { assertData } from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';
import * as Mutation from './Mutation';
import * as Node from './Node';
import * as Query from './Query';

export const resolvers: GraphQLTypes.Resolvers = {
  Edge: {
    __resolveType(parent) {
      if (!parent.__typename) return null;

      switch (parent.__typename) {
        case 'BookConnectionEdge':
          return 'BookConnectionEdge';
        case 'MovieConnectionEdge':
          return 'MovieConnectionEdge';
        case 'MusicConnectionEdge':
          return 'MusicConnectionEdge';
        case 'UserConnectionEdge':
          return 'UserConnectionEdge';
        case 'TodoConnectionEdge':
          return 'TodoConnectionEdge';

        default:
          return assertData(parent.__typename, () => null);
      }
    },
  },
  Mutation: {
    createTodo: Mutation.CreateTodo.resolver,
    removeTodo: Mutation.RemoveTodo.resolver,
    updateTodo: Mutation.UpdateTodo.resolver,
  },
  Node: {
    __resolveType(parent) {
      if (!parent.__typename) return null;

      switch (parent.__typename) {
        case 'User':
          return 'User';
        case 'Book':
          return 'Book';
        case 'Movie':
          return 'Movie';
        case 'Music':
          return 'Music';
        case 'Todo':
          return 'Todo';
        default:
          return assertData(parent.__typename, () => null);
      }
    },
  },
  Query: {
    book: Query.Book.resolver,
    books: Query.Books.resolver,

    movie: Query.Movie.resolver,
    movies: Query.Movies.resolver,

    music: Query.Music.resolver,
    musics: Query.Musics.resolver,

    node: Node.Node.resolver,
    nodes: Node.Nodes.resolver,

    todo: Query.Todo.resolver,
    todos: Query.Todos.resolver,

    user: Query.User.resolver,
    users: Query.Users.resolver,
  },
};

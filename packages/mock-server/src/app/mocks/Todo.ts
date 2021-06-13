import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';

const todo = (): GraphQLTypes.Todo => ({
  __typename: 'Todo',
  createdAt: Faker.date.past(2).toISOString(),
  description: Faker.name.title(),
  id: Faker.datatype.uuid(),
  isDone: Faker.datatype.boolean(),
  updatedAt: Faker.date.past(1).toISOString(),
});

export const todos: GraphQLTypes.Todo[] = Utilities.createArray(
  Faker.datatype.number({ max: 10, min: 3 })
).map(() => todo());

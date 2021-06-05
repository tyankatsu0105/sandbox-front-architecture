import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';

const music = (): GraphQLTypes.Music => ({
  __typename: 'Music',
  artist: Faker.name.findName(),
  createdAt: Faker.date.past(2).toISOString(),
  id: Faker.datatype.uuid(),
  name: Faker.name.title(),
  releaseAt: Faker.date.past(1000).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
});

export const musics: GraphQLTypes.Music[] = Utilities.createArray(
  Faker.datatype.number({ max: 1000, min: 200 })
).map(() => music());

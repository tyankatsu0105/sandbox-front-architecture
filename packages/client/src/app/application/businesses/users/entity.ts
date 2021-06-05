import * as TypesUser from '~client/app/application/types/user';

export type User = {
  readonly id: TypesUser.User['id'];
  readonly name: TypesUser.User['name'];
};

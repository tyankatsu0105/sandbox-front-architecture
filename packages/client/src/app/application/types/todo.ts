import * as Scalars from './scalars';

export type Todo = {
  readonly createdAt: Scalars.TypeScalarDateTime;
  readonly description: string;
  readonly id: Scalars.TypeScalarID;
  readonly isDone: boolean;
  readonly updatedAt: string;
};

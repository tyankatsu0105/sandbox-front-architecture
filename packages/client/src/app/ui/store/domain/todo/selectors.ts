import * as ReduxToolkit from '@reduxjs/toolkit';

import { RootState } from '~client/app/ui/store';

const featureState = (state: RootState) => state.domain.todo;

export const todoSelector = ReduxToolkit.createSelector(
  featureState,
  (state) => ({
    createdAt: state.createdAt,
    description: state.description,
    id: state.id,
    isDone: state.isDone,
    updatedAt: state.updatedAt,
  })
);

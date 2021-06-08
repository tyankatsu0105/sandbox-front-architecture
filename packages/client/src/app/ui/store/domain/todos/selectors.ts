import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Store from '~client/app/ui/store';

const featureState = (state: Store.RootState) => state.domain.todos;

export const statusSelector = ReduxToolkit.createSelector(
  featureState,
  (state) => state.status
);

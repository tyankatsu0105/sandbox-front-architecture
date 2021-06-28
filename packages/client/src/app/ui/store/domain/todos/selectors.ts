import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/todos/entity';
import * as Store from '~client/app/ui/store';

import * as Slice from './slice';

const featureStateSelector = (state: Store.RootState) => state.domain.todos;

const adapterSelector = Slice.adapter.getSelectors(featureStateSelector);

export const idsSelector = adapterSelector.selectIds;
export const entitiesSelector = adapterSelector.selectEntities;
export const allSelector = adapterSelector.selectAll;
export const totalSelector = adapterSelector.selectTotal;

export const statusSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.status
);

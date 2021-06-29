import { state } from '~client/app/ui/store/mock';
import * as Status from '~client/app/ui/store/status';

import * as Operations from './operations';
import * as Slice from './slice';
import { State } from './types';

describe('slice', () => {
  let featureState: State;

  beforeEach(() => {
    featureState = state.domain.todos;
  });
  describe('reducers', () => {
    describe('toInitialState', () => {
      it('when run toInitialState, then state is same value with initialState', () => {
        const result = Slice.reducer(
          featureState,
          Slice.actions.toInitialState
        );

        expect(result).toStrictEqual(Slice.initialState);
      });
    });
  });

  describe('extraReducers', () => {
    describe('fetchTodos', () => {
      it(`when pending, then status is ${Status.status.SUBMITTING}`, () => {
        const payload = undefined;
        const action: Omit<
          ReturnType<typeof Operations.fetchTodos.pending>,
          'meta'
        > = { payload, type: Operations.fetchTodos.pending.type };
        const expected: State = {
          ...featureState,
          status: Status.status.SUBMITTING,
        };

        const result = Slice.reducer(featureState, action);

        expect(result).toStrictEqual(expected);
      });

      it(`when fulfilled, then state is updated by payload`, () => {
        const todo = {
          createdAt: new Date('2020-01-01').toISOString(),
          description: 'Study',
          id: '96CF6F3C-6C6A-4598-83AA-B042C822E5FF',
          isDone: false,
          updatedAt: new Date('2020-01-05').toISOString(),
        };
        const payload: Parameters<typeof Operations.fetchTodos.fulfilled>[0] = {
          pageInfo: {},
          todos: [todo],
          totalCount: 1,
        };
        const action: Omit<
          ReturnType<typeof Operations.fetchTodos.fulfilled>,
          'meta'
        > = {
          payload,
          type: Operations.fetchTodos.fulfilled.type,
        };
        const expected: State = {
          ...featureState,
          entities: {
            ...featureState.entities,
            [todo.id]: todo,
          },
          ids: [...featureState.ids, todo.id],
          pageInfo: payload.pageInfo,
          status: Status.status.SUCCESS,
          totalCount: payload.totalCount,
        };

        const result = Slice.reducer(featureState, action);

        expect(result).toStrictEqual(expected);
      });

      it(`when rejected, then status is ${Status.status.SUBMITTING}`, () => {
        const payload: Parameters<typeof Operations.fetchTodos.rejected>[0] =
          new Error('error');
        const action: Omit<
          ReturnType<typeof Operations.fetchTodos.rejected>,
          'meta'
        > = {
          error: new Error(),
          payload,
          type: Operations.fetchTodos.rejected.type,
        };
        const expected: State = {
          ...featureState,
          status: Status.status.INVALID,
        };

        const result = Slice.reducer(featureState, action);

        expect(result).toStrictEqual(expected);
      });
    });
  });
});

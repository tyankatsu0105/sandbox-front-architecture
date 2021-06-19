import '~client/app/ui/shared/utilities/test/module-mocks/react-redux';

import * as TestingLibraryReactHooks from '@testing-library/react-hooks';
import * as ReactRedux from 'react-redux';

import * as Utilities from '~client/app/ui/shared/utilities';
import * as StoreTodos from '~client/app/ui/store/domain/todos';

import * as Hooks from './hooks';

// ------------------------------------
// Setups
// ------------------------------------

jest.mock('~client/app/ui/store/domain/todos', () => ({
  ...jest.requireActual('~client/app/ui/store/domain/todos'),
  fetchMoreTodos: jest.fn(),
  fetchTodos: jest.fn(),
}));

// ------------------------------------
// Test cases
// ------------------------------------

describe('hooks', () => {
  describe('usePage', () => {
    it('when called usePage, then dispatch fetchTodos', () => {
      TestingLibraryReactHooks.renderHook(() => Hooks.usePage(), {
        wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper,
      });

      expect(StoreTodos.fetchTodos).toHaveBeenCalledWith({});
    });

    it('when called usePage, then return todos', () => {
      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.usePage(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      expect(result.current.todos).toStrictEqual(
        ReactRedux.useSelector(StoreTodos.allSelector)
      );
    });

    it('when called fetchMoreTodos, then dispatch fetchMoreTodos', () => {
      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.usePage(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      TestingLibraryReactHooks.act(() => {
        result.current.fetchMoreTodos();
      });

      expect(StoreTodos.fetchMoreTodos).toHaveBeenCalledWith();
    });
  });
});

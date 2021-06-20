import '~client/app/ui/shared/utilities/test/module-mocks/react-redux';

import * as TestingLibraryReactHooks from '@testing-library/react-hooks';
import * as ReactHookForm from 'react-hook-form';
import * as ReactRedux from 'react-redux';

import * as Utilities from '~client/app/ui/shared/utilities';
import * as StoreTodos from '~client/app/ui/store/domain/todos';

import * as Hooks from './hooks';

// ------------------------------------
// Setups
// ------------------------------------

jest.mock(
  '~client/app/ui/store/domain/todos',
  (): Utilities.Test.Utilities.Mock.MockMap<typeof StoreTodos> => ({
    ...jest.requireActual('~client/app/ui/store/domain/todos'),
    createTodo: jest.fn(),
    fetchMoreTodos: jest.fn(),
    fetchTodos: jest.fn(),
    removeTodo: jest.fn(),
    updateTodo: jest.fn(),
  })
);

// ------------------------------------
// Test cases
// ------------------------------------
beforeAll(() => {
  jest.clearAllMocks();
});

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

  describe('useForm', () => {
    it('when called create, then dispatch createTodo', async () => {
      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      await TestingLibraryReactHooks.act(async () => {
        await result.current.create();
      });

      expect(StoreTodos.createTodo).toHaveBeenCalledWith({
        description: undefined,
      });
    });

    it('when called remove, then dispatch removeTodo', () => {
      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );
      const values: Parameters<typeof result.current.remove>[0] = {
        id: 'id',
        index: 0,
      };

      TestingLibraryReactHooks.act(() => {
        result.current.remove(values);
      });

      expect(StoreTodos.removeTodo).toHaveBeenCalledWith({ id: values.id });
    });

    it('when called update, then dispatch updateTodo', () => {
      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );
      const values: Parameters<typeof result.current.update>[0] = {
        id: 'id',
        isDone: true,
      };

      TestingLibraryReactHooks.act(() => {
        result.current.update(values);
      });

      expect(StoreTodos.updateTodo).toHaveBeenCalledWith(values);
    });

    it('when called createFormHandler, then called useForm of react hook form', () => {
      const spy = jest.spyOn(ReactHookForm, 'useForm');

      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      TestingLibraryReactHooks.act(() => {
        result.current.createFormHandler;
      });

      expect(spy).toHaveBeenCalledWith();
    });

    it('when called editFormHandler, then called useForm of react hook form', () => {
      const spy = jest.spyOn(ReactHookForm, 'useForm');

      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      TestingLibraryReactHooks.act(() => {
        result.current.editFormHandler;
      });

      expect(spy).toHaveBeenCalledWith();
    });

    it('when called editFormsHandler, then called useFieldArray of react hook form', () => {
      const spy = jest.spyOn(ReactHookForm, 'useFieldArray');

      const { result } = TestingLibraryReactHooks.renderHook(
        () => Hooks.useForm(),
        { wrapper: Utilities.Test.Utilities.TestingLibrary.wrapper }
      );

      TestingLibraryReactHooks.act(() => {
        result.current.editFormsHandler;
      });

      expect(spy).toHaveBeenCalledWith({
        control: result.current.editFormHandler.control,
        name: 'todos',
      });
    });
  });
});

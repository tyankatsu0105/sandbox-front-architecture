import { state } from '~client/app/ui/store/mock';

import * as Selectors from './selectors';

describe('selectors', () => {
  describe('statusSelector', () => {
    it('when run statusSelector, then return status from state', () => {
      const result = Selectors.statusSelector(state);

      expect(result).toBe(state.domain.todos.status);
    });
  });
});

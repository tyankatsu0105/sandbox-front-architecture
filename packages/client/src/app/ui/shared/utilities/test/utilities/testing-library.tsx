import React from 'react';
import * as ReactRedux from 'react-redux';

import * as MockStore from '~client/app/ui/store/mock';

/**
 *
 * Depends on @testing-library/react-hooks#renderHook
 * @example
 * import { wrapper } from 'path/to/this/file'
 * TestingLibraryReactHooks.renderHook(() => someHooks(), {
 *   wrapper
 * });
 */
export const wrapper: React.FC = ({ children }) => (
  <ReactRedux.Provider store={MockStore.store}>{children}</ReactRedux.Provider>
);

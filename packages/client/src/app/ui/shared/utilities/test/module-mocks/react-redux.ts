import * as MockStore from '~client/app/ui/store/mock';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: jest.fn((fn) => fn(MockStore.state)),
}));

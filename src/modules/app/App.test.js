import { configureSetup } from 'utils/testHelpers';

import { App } from './App';

const defaultProps = {};

const childrenMap = {};

const setup = configureSetup(App, defaultProps, childrenMap);

describe('<App />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';

import store from './store/Store';

describe('App Component Test', () => {
  it("renders", () => {
    render(<Provider store={store}><App /></Provider>);
  });
});

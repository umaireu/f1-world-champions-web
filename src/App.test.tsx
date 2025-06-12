import { render } from '@utils/test/render';
import App from './App';

describe('app component', () => {
  it('should renders successfully', () => {
    const { baseElement } = render({ ui: <App /> });
    expect(baseElement).toBeTruthy();
  });
});

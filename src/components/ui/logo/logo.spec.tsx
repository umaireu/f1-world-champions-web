import { render } from '@utils/test/render';
import { Logo } from './logo';

describe('logo component', () => {
  it('should render successfully', () => {
    const { baseElement } = render({ ui: <Logo /> });
    expect(baseElement).toBeTruthy();
  });
});

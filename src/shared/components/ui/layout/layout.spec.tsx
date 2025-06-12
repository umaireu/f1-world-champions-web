import { render } from '@shared/utils/test/render';
import { Layout } from './layout';

describe('layout component', () => {
  it('should render layout successfully', () => {
    const { baseElement } = render({ ui: <Layout /> });
    expect(baseElement).toBeInTheDocument();
  });
});

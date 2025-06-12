import type { ReactElement, ReactNode } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import i18n from '../../translations';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';

const render = ({
  ui,
  rtlOptions,
  withRouter,
}: {
  ui: ReactElement;
  rtlOptions?: Omit<RenderOptions, 'wrapper'>;
  withRouter?: boolean;
}) => {
  const Wrapper = ({
    children,
    withRouter,
  }: {
    children: ReactNode;
    withRouter?: boolean;
  }) => {
    if (withRouter) {
      return (
        <I18nextProvider i18n={i18n}>
          <MemoryRouter>{children}</MemoryRouter>
        </I18nextProvider>
      );
    }
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  };
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Wrapper withRouter={withRouter}>{children}</Wrapper>
    ),
    ...rtlOptions,
  });
};
export { render };

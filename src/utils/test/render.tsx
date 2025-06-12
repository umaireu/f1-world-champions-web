import type { ReactElement, ReactNode } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import i18n from '../../translations';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, type InitialEntry } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
    },
  });
const queryClient = createTestQueryClient();
const render = ({
  ui,
  rtlOptions,
  withRouter,
  routeInitialEntries,
}: {
  ui: ReactElement;
  rtlOptions?: Omit<RenderOptions, 'wrapper'>;
  withRouter?: boolean;
  routeInitialEntries?: InitialEntry[];
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
          <MemoryRouter initialEntries={routeInitialEntries}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        </I18nextProvider>
      );
    }
    return (
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </I18nextProvider>
    );
  };
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Wrapper withRouter={withRouter}>{children}</Wrapper>
    ),
    ...rtlOptions,
  });
};
export { render };

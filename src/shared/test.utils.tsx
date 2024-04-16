import { render } from '@testing-library/react';

import { ColorScheme, theme } from '../design-system/theme';
import { ThemeProvider } from 'styled-components';

export function renderWithTheme(
  children: React.ReactElement,
  colorScheme?: ColorScheme
) {
  return render(
    <ThemeProvider theme={colorScheme === 'dark' ? theme.dark : theme.light}>
      {children}
    </ThemeProvider>
  );
}

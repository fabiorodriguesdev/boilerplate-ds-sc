import { useEffect, useState } from 'react';

import { Button } from '@components';
import { ColorScheme, theme as styledTheme } from '@design-system';
import Home from '@pages/Home';
import { GlobalStyle } from '@styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const { light, dark } = styledTheme;

  const storedThemePreference = localStorage.getItem('theme');

  const toggleTheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newColorScheme);
    setColorScheme(newColorScheme);
  };

  useEffect(() => {
    if (storedThemePreference) {
      setColorScheme(storedThemePreference as ColorScheme);
    }
  }, [storedThemePreference]);

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? dark : light}>
      <Button onClick={toggleTheme}>Change Theme</Button>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

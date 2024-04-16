import React from 'react';

import type { Preview } from '@storybook/react';

import { theme } from '../src/design-system/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'sun',
        items: [
          {
            title: 'Light',
            value: 'light',
            icon: 'sun',
          },
          {
            title: 'Dark',
            value: 'dark',
            icon: 'moon',
          },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      values: [
        { name: 'light', value: theme.light.colors.background },
        { name: 'dark', value: theme.dark.colors.background },
      ],
    },
  },
};

export default preview;

const StoryWrapper = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const withTheme = (Story, context) => {
  const storybookTheme = context.globals.theme;
  const storyTheme = storybookTheme === 'dark' ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={storyTheme}>
      <StoryWrapper>
        <Story />
      </StoryWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

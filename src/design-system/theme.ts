import { getColor } from '@design-system/utils';

import {
  type ButtonTheme,
  buttonDark,
  buttonLight,
} from '../components/Button/Button.theme';
import { tokens } from './tokens';

export type ColorScheme = 'light' | 'dark';

export interface ThemeProperties {
  typography: {
    family: string;
    size: string;
  };
  colors: {
    primary: string;
    text: string;
    background: string;
  };
  components: {
    button: ButtonTheme;
  };
}

export const dark: ThemeProperties = {
  typography: {
    family: tokens.typography.family.primary,
    size: tokens.typography.sizes.default,
  },
  colors: {
    primary: getColor('purple10'),
    text: getColor('neutral10'),
    background: getColor('neutral80'),
  },
  components: {
    button: buttonDark,
  },
};

export const light: ThemeProperties = {
  typography: {
    family: tokens.typography.family.primary,
    size: tokens.typography.sizes.default,
  },
  colors: {
    primary: getColor('purple10'),
    text: getColor('neutral80'),
    background: getColor('neutral10'),
  },
  components: {
    button: buttonLight,
  },
};

interface Theme {
  light: ThemeProperties;
  dark: ThemeProperties;
}

export const theme: Theme = {
  light,
  dark,
};

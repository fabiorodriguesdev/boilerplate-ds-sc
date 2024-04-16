import { type ThemeProperties } from '../design-system/theme';

export type ThemeProps = { theme: ThemeProperties };

/**
 * This type  convert the props of a component into a styled-components props
 * to prevent the prop to be displayed in the DOM
 */
export type StyledProps<T> = {
  [Property in keyof T as `$${string & Property}`]: T[Property];
};

/**
 * This type is used to merge the theme and the props of a component
 */
export type ThemeWithProps<T> = ThemeProps & StyledProps<T>;

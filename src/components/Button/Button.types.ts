import { MouseEvent } from 'react';

export const TYPES = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
} as const;

type Types = (typeof TYPES)[keyof typeof TYPES];
type Variants = (typeof VARIANTS)[keyof typeof VARIANTS];

export interface ButtonProps {
  /**
   * The content of the button.
   */
  children: React.ReactNode;

  /**
   * The click handler.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;

  /**
   * The type of the button.
   */
  type?: Types;

  /**
   * The variant of the button.
   */
  variant?: Variants;

  /**
   * Set disabled state.
   */
  disabled?: boolean;
}

import { ThemeWithProps } from '@shared/types';

import { ButtonProps, VARIANTS } from './Button.types';
import styled, { css } from 'styled-components';

type StyledProps = ThemeWithProps<Pick<ButtonProps, 'variant'>>;

const base = ({
  theme: {
    typography,
    components: {
      button: { base },
    },
  },
}: StyledProps) => css`
  padding: ${base.padding};
  border: ${base.border};
  border-radius: ${base.borderRadius};
  font-family: ${typography.family};
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
`;

const primary = ({
  theme: {
    components: { button },
  },
  $variant,
}: StyledProps) =>
  $variant === VARIANTS.PRIMARY &&
  css`
    background-color: ${button.variants.primary.background};
    color: ${button.variants.primary.color};

    &:hover {
      background-color: ${button.variants.primary.hover.background};
      color: ${button.variants.primary.hover.color};
    }

    &:disabled {
      background-color: ${button.variants.primary.disabled.background};
      color: ${button.variants.primary.disabled.color};
      cursor: not-allowed;
    }
  `;

const secondary = ({
  theme: {
    components: { button },
  },
  $variant,
}: StyledProps) =>
  $variant === VARIANTS.SECONDARY &&
  css`
    background-color: ${button.variants.secondary.background};
    color: ${button.variants.secondary.color};

    &:hover {
      background-color: ${button.variants.secondary.hover.background};
      color: ${button.variants.secondary.hover.color};
    }

    &:disabled {
      background-color: ${button.variants.secondary.disabled.background};
      color: ${button.variants.secondary.disabled.color};
      cursor: not-allowed;
    }
  `;

const success = ({
  theme: {
    components: { button },
  },
  $variant,
}: StyledProps) =>
  $variant === VARIANTS.SUCCESS &&
  css`
    background-color: ${button.variants.success.background};
    color: ${button.variants.success.color};

    &:hover {
      background-color: ${button.variants.success.hover.background};
      color: ${button.variants.success.hover.color};
    }

    &:disabled {
      background-color: ${button.variants.success.disabled.background};
      color: ${button.variants.success.disabled.color};
      cursor: not-allowed;
    }
  `;

export const Button = styled.button<StyledProps>(
  base,
  primary,
  secondary,
  success
);

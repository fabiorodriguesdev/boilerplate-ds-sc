import { getColor } from '@design-system/utils';

import { tokens } from '../../design-system/tokens';

const {
  sizes: { spacings, radii },
} = tokens;

type ButtonBase = {
  padding: string;
  border: string;
  borderRadius: string;
};

type VariantColors = {
  background: string;
  color: string;
};

type ButtonVariant = VariantColors & {
  hover: VariantColors;
  disabled: VariantColors;
};

export type ButtonTheme = {
  base: ButtonBase;
  variants: {
    [key: string]: ButtonVariant;
  };
};

const base: ButtonBase = {
  padding: [spacings.default, spacings.large].join(' '),
  border: 'none',
  borderRadius: radii.pill,
};

const disabledLight: VariantColors = {
  background: getColor('neutral40'),
  color: getColor('neutral30'),
};

export const buttonLight: ButtonTheme = {
  base,
  variants: {
    primary: {
      background: getColor('purple90'),
      color: getColor('neutral10'),
      hover: {
        background: getColor('purple90', 0.8),
        color: getColor('neutral10'),
      },
      disabled: disabledLight,
    },
    secondary: {
      background: getColor('neutral60'),
      color: getColor('neutral10'),
      hover: {
        background: getColor('neutral60', 0.8),
        color: getColor('neutral10'),
      },
      disabled: disabledLight,
    },
    success: {
      background: getColor('green90'),
      color: getColor('neutral10'),
      hover: {
        background: getColor('green90', 0.8),
        color: getColor('neutral10'),
      },
      disabled: disabledLight,
    },
  },
};

const disabledDark: VariantColors = {
  background: getColor('neutral70'),
  color: getColor('neutral50'),
};

export const buttonDark: ButtonTheme = {
  base,
  variants: {
    primary: {
      background: getColor('purple20'),
      color: getColor('purple90'),
      hover: {
        background: getColor('purple20', 0.8),
        color: getColor('purple90'),
      },
      disabled: disabledDark,
    },
    secondary: {
      background: getColor('neutral60'),
      color: getColor('neutral10'),
      hover: {
        background: getColor('neutral60', 0.8),
        color: getColor('neutral10'),
      },
      disabled: disabledDark,
    },
    success: {
      background: getColor('green20'),
      color: getColor('green90'),
      hover: {
        background: getColor('green20', 0.8),
        color: getColor('green90'),
      },
      disabled: disabledDark,
    },
  },
};

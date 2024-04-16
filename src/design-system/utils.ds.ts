import { tokens } from './tokens';

export const px2rem = (pxl: number) => `${pxl / 16}rem`;

/**
 *
 * @param color - color from tokens.colors
 * @param alpha - alpha value between 0 and 1
 * @returns color with alpha value
 */
export const getColor = (color: keyof typeof tokens.colors, alpha?: number) => {
  if (alpha) {
    return applyAlphaToHex(tokens.colors[color], alpha);
  }

  return tokens.colors[color];
};

export const applyAlphaToHex = (hex: string, alpha: number) => {
  const hexWithoutAlpha = hex.replace(/[^0-9A-F]/gi, '');
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0');
  return `#${hexWithoutAlpha}${alphaHex}`;
};

import { renderWithTheme } from '@shared/test.utils';
import { screen } from '@testing-library/react';

import { Button, ButtonProps } from '.';
import { describe, expect, it } from 'vitest';

type VariantProps = Array<ButtonProps['variant']>;

describe('@Button', () => {
  describe('@Styles', () => {
    it.each(['primary', 'secondary', 'success'] as VariantProps)(
      'should render with variant %s',
      (variant) => {
        renderWithTheme(<Button variant={variant}>{variant}</Button>);

        const button = screen.getByText(`${variant}`);
        expect(button).toBeDefined();
      }
    );
  });

  describe('@Behavior', () => {
    it('should be a disabled component', () => {
      renderWithTheme(<Button disabled>Button</Button>);
      const button = screen.getByRole('button', {
        name: /Button/i,
      });

      expect(button).toHaveProperty('disabled', true);
    });
  });
});

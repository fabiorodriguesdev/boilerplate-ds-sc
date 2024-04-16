import * as S from './Button.styled';
import { ButtonProps, TYPES, VARIANTS } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  children,
  type = TYPES.BUTTON,
  variant = VARIANTS.PRIMARY,
  disabled = false,
  ...eventHandlers
}) => (
  <S.Button
    type={type}
    disabled={disabled}
    $variant={variant}
    {...eventHandlers}
  >
    {children}
  </S.Button>
);

Button.displayName = 'Button';

export default Button;

import StyledButton from './styled';
import IButtonProps from './types';

function ButtonDark({
  width,
  height,
  children,
  handleClick,
  isDisabled,
}: IButtonProps) {
  return (
    <StyledButton
      {...{ width, height }}
      onClick={handleClick}
      disabled={isDisabled || false}
    >
      {children}
    </StyledButton>
  );
}

export default ButtonDark;

import StyledButton from './styled';
import IButtonProps from './types';

function ButtonYellow({
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

export default ButtonYellow;

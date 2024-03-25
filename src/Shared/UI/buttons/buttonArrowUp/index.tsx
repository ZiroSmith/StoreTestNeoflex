import StyledButton from './styled';
import IButtonProps from './types';

function ButtonArrowUp({ display, onClick }: IButtonProps) {
  return <StyledButton {...{ display, onClick }} />;
}
export default ButtonArrowUp;

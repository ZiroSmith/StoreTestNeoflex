import { ReactNode } from 'react';

interface IButtonProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  handleClick: () => void;
  isDisabled?: boolean;
}

export default IButtonProps;

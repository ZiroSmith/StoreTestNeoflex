import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../../Constants/colors';

interface IButtonProps {
  width: string | undefined;
  height: string | undefined;
  children: ReactNode;
}

const StyledButton = styled.button<IButtonProps>`
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  padding: 10px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${colors.black};
  }
  &:active {
    background-color: ${colors.black};
  }
  &:disabled {
    background-color: ${colors.grey};
  }
`;

export default StyledButton;

import styled from 'styled-components';
import { ReactNode } from 'react';
import colors from '../../../Constants/colors';

interface IButtonPropss {
  width?: string;
  height?: string;
  children?: ReactNode;
  isDisabled?: boolean;
}

const StyledButton = styled.button<IButtonPropss>`
  background-color: ${colors.darkGrey50};
  color: ${colors.yellow};
  border: 5px solid ${colors.yellow};
  padding: 10px 24px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${colors.darkGrey};
  }
  &:active {
    background-color: ${colors.black};
  }
  &:disabled {
    background-color: ${colors.black40};
    color: ${colors.lightGrey50};
    border-color: ${colors.lightGrey50};
  }
`;

export default StyledButton;

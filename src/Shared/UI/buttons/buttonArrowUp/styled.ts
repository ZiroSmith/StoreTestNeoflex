import styled from 'styled-components';
import IButtonProps from './types';
import PageTitleBG from '../../../../Assets/images/buttonArrowUp.svg';

const StyledButton = styled.button<IButtonProps>`
  position: fixed;
  right: 16%;
  bottom: 4%;
  background-image: ${`url('${PageTitleBG}')`};
  width: 152px;
  height: 128px;
  margin: 0 20px 0 0;
  cursor: pointer;
  transition: 0.3s all;
  display: ${(props) => props.display || 'block'};
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1440px) {
    right: 5%;
    bottom: 4%;
    margin: 6px 20px 0 0;
  }

  @media (max-width: 1024px) {
    right: 0;
    bottom: 4%;
    background-size: contain;
    width: 112px;
    height: 96px;
    margin: 22px 30px 0 0;
  }

  @media (max-width: 834px) {
    margin: 40px 32px 0 0;
  }

  @media (max-width: 360px) {
    right: 12%;
    bottom: 4%;
    width: 72px;
    height: 64px;
    margin: 20px 16px 0 0;
  }
`;

export default StyledButton;

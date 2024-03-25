import styled from 'styled-components';

import colors from '../../Constants/colors';
import { linkReg24 } from '../../Constants/typography';

export const LinkContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  position: relative;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const LinkImg = styled.img`
  width: 32px;
  height: 38px;
`;

export const Test = styled.a`
  ${linkReg24};
  color: ${colors.darkGrey};
  &:hover {
    color: ${colors.black};
  }
  &:active {
    color: ${colors.black};
  }

  @media (max-width: 834px) {
    font-size: 18px;
  }
`;

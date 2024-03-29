import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../Shared/Constants/colors';

export const ErrorPageWrapper = styled.div`
  width: 670px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const ErrorTextContainer = styled.div`
  max-width: 365px;
  margin: 0 auto;

`;

export const ErrorText = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${colors.black};
  text-align: center;
`;

export const ErrorLink = styled(NavLink)`
  color: ${colors.grey};
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../Shared/Constants/colors';
import Error404Img from '../../Assets/images/error404.svg';

export const ErrorPageWrapper = styled.div`
  width: 670px;
  min-height: 456px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  margin: 16px auto 40px;
  background: url('${Error404Img}') no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ErrorTextContainer = styled.div`
  max-width: 365px;
  margin-bottom: 54px;
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

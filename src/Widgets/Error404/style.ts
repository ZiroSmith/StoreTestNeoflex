import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Shared/Constants/colors";
import errorImage from "../../Assets/images/error.png";

export const ErrorPageWrapper = styled.div`
  width: 1440px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const ErrorImg = styled.div`
  width: 800px;
  height: 350px;
  background-image: url("${errorImage}");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;

export const ErrorTextContainer = styled.div`
  max-width: 600px;
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

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  nawLink,
  langBtnOff,
  langBtnOn,
} from "../../Shared/Constants/typography";

export const FooterWrapper = styled.footer`
  flex-shrink: 0;
  max-width: 1137px;
  width: 100%;
  height: 149px;
  margin: 20px auto 0;
  background: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    height: 350px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Link = styled(NavLink)`
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const Footerlogo = styled.img`
  width: 85px;
  height: 23px;
  margin: 36px 0 0 28px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const FooterInfo = styled.div`
  margin: 34px 0 0;
  max-width: 490px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 34px auto 0;
  }
`;

export const FooterNaw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 4px 0 0 58px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const FooterNawLink = styled.a`
  ${nawLink}
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterLang = styled.div`
  margin: 2px 2px 0 0;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto 0;
  }
`;

export const Сonditions = styled.a`
  ${nawLink}
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

export const FooterLangContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 36px;

  @media (max-width: 600px) {
    justify-content: center;
    margin: 0 auto;
  }
`;
export const LangIcon = styled.img`
  margin-right: 16px;
`;

export const LangBtn = styled.div`
  ${langBtnOff}
  margin-right: 46px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const LangBtnYellow = styled.div`
  ${langBtnOn}
  margin-right: 16px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  gap: 18px;
  margin: 30px 26px 0 0;

  @media (max-width: 600px) {
    margin: 30px auto 0;
  }
`;

export const FooterLink = styled.a`
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterLinkImg = styled.img``;

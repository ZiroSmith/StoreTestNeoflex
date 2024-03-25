import styled from 'styled-components';

import EmployeesCardProps from './types';
import { fonts, reg24auto } from '../../Constants/typography';
import colors from '../../Constants/colors';

export const Card = styled.article<EmployeesCardProps>`
  max-width: 604px;
  width: 100%;
  height: 1000px;
  box-sizing: border-box;
  margin: 0 auto 78px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    margin: 0 auto 70px;
  }

  @media (max-width: 1220px) {
    max-width: 468px;
    margin: 0 auto 19px;
    padding: 0;
  }

  @media (max-width: 960px) {
    max-width: 372px;
    height: 952px;
    margin: 0 auto 24px;
  }

  @media (max-width: 360px) {
    max-width: 360px;
    height: 799px;
    margin: 0 auto 24px;
  }
`;

export const CardTitle = styled.h2`
  max-width: 574px;
  width: 100%;
  height: 53px;
  padding: 12px 0 0;
  margin: 16px 0 26px 15px;
  text-align: center;
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 28px;
  color: ${colors.white};
  background-color: ${colors.darkGrey};

  @media (max-width: 1440px) {
    margin: 0 0 26px 15px;
    padding: 12px 0 2px;
  }

  @media (max-width: 1024px) {
    max-width: 436px;
    height: 53px;
    margin: 28px 16px 0;
  }

  @media (max-width: 834px) {
    max-width: 340px;
    height: 48px;
    font-size: 24px;
    padding-top: 10px;
  }

  @media (max-width: 360px) {
    max-width: 296px;
    height: 38px;
    font-size: 20px;
    padding-top: 8px;
    margin: 16px auto 0;
  }
`;

export const CardImg = styled.img`
  margin: 0 auto;
  max-width: 412px;

  @media (max-width: 1024px) {
    max-width: 350px;
    margin: 24px auto 0;
  }

  @media (max-width: 834px) {
    width: 300px;
    margin: 24px auto 0;
  }

  @media (max-width: 360px) {
    width: 250px;
  }
`;

export const CardSubtitle = styled.h3`
  margin: 40px 0 33px;
  padding: 14px 0;
  text-align: center;
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 22px;
  color: ${colors.black};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: ${colors.greyGradient};

  @media (max-width: 1440px) {
    margin: 30px 0 32px;
    padding: 18px 0;
  }

  @media (max-width: 1024px) {
    font-size: 19px;
    margin: 32px 0 33px;
    padding: 18px 0 17px;
  }

  @media (max-width: 834px) {
    font-size: 17px;
    margin: 32px 0 30px;
    padding: 18px 0 16px;
  }

  @media (max-width: 360px) {
    width: 296px;
    margin: 32px auto 30px;
  }
`;

export const CardText = styled.p`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  ${reg24auto}
  line-height: 36px;

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
    max-width: 410px;
    padding: 0 0 0 2px;
  }

  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
    max-width: 330px;
    padding: 2px 4px 0 11px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 300px;
    padding: 2px 0 0 2px;
  }
`;

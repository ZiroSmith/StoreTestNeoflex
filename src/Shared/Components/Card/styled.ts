import styled from "styled-components";
import CardProps from "./types";
import starIcon from "../../../Assets/images/icon_star.svg";

import {
  titleCard,
  priceCard,
  oldPriceCard,
  gradeCard,
} from "../../Constants/typography/index";

export const CardContainer = styled.article<CardProps>`
  width: 350px;
  height: 407px;
  background-color: white;
  border-radius: 30px;
`;

export const CardImg = styled.img`
  object-fit: contain;
  margin: 15px 65px 52px;
  width: 219px;
  height: 237px;
`;

export const CardInfoContainer = styled.div`
  margin: 0 auto;
  width: 310px;
  display: flex;
  justify-content: space-between;
`;

export const CardInfo = styled.div``;

export const CardBuy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  ${titleCard}
`;

export const CardGrade = styled.div`
  margin: 24px 0 0;
  display: flex;
  gap: 10px;
  ${gradeCard}
`;

export const CardGradeIcon = styled.div`
  background-image: url("${starIcon}");
  width: 23px;
  height: 22px;
`;

export const CardPrice = styled.div`
  ${priceCard}
`;

export const CardOldPrice = styled.div`
  ${oldPriceCard}
  text-align: right;
  margin-right: 8px;
  margin-bottom: 8px;
  text-decoration: line-through;
`;

export const CardBuyBtn = styled.a`
  ${titleCard}
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

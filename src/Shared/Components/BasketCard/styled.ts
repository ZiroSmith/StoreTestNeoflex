import styled from "styled-components";
import CardProps from "./types";
import IconAdd from "../../../Assets/images/icon_add.svg";
import IconPutAway from "../../../Assets/images/icon_putaway.svg";
import IconDelete from "../../../Assets/images/icon_delete.svg";

import { titleCard, priceCard } from "../../Constants/typography/index";

export const CardContainer = styled.article<CardProps>`
  max-width: 633px;
  width: 100%;
  height: 218px;
  display: flex;
  background-color: white;
  border-radius: 30px;
  box-shadow: -4px -4px 14px 2px rgba(0, 0, 0, 0.1),
    4px 4px 14px 2px rgba(0, 0, 0, 0.1);
`;

export const QuantityContainer = styled.div``;

export const CardImg = styled.img`
  width: 146px;
  height: 136px;
  margin: 12px 0 0 20px;
`;

export const Quantity = styled.div`
  width: 118px;
  margin: 20px 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityAddBtn = styled.div`
  background-image: url("${IconAdd}");
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;
export const QuantityResult = styled.div``;

export const QuantityPutAwayBtn = styled.div`
  background-image: url("${IconPutAway}");
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;
export const CardInfoContainer = styled.div`
  flex-grow: 1;
  margin-left: 22px;
  width: 310px;

  @media (max-width: 500px) {
    width: 280px;
    margin-left: 0;
  }
`;
export const CardTitle = styled.div`
  ${titleCard}
  margin: 76px 0 12px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const CardPrice = styled.div<CardProps>`
  ${priceCard}
  color: ${(props) => props.color || "black"};

  @media (max-width: 600px) {
    font-size: 12px;
    width: 50px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  margin: 16px 28px 20px 0;
`;

export const DeleteBtn = styled.div`
  background-image: url("${IconDelete}");
  width: 20px;
  height: 17px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

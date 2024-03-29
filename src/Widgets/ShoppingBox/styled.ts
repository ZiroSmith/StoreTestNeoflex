import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { titleText, titleCard } from "../../Shared/Constants/typography";

export const Basket = styled.section`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`;

export const BasketStoreContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BasketStoreTitle = styled.h2`
  ${titleText}
`;

export const BasketCardContainer = styled.div`
  max-width: 633px;
  width: 100%;
  margin: 16px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Payment = styled.div`
  max-width: 350px;
  width: 100%;
  height: 120px;
  margin: 20px 0 0;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -4px -4px 14px 2px rgba(0, 0, 0, 0.1),
  4px 4px 14px 2px rgba(0, 0, 0, 0.1);
`;
export const PaymentPrice = styled.div`
  max-width: 311px;
  width: 100%;
  margin: 22px auto 0;
  display: flex;
  justify-content: space-between;
`;

export const PaymentPriceText = styled.div`
  ${titleCard}
  font-size: 15px;
`;

export const PaymentPriceSum = styled.div`
  ${titleCard}
  font-size: 15px;
`;

export const PaymentBtn = styled.div`
  max-width: 349px;
  width: 100%;
  height: 65px;
  background-color: black;
  border-radius: 20px;
  text-align: center;
  padding-top: 23px;
  ${titleCard}
  color: white;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.7;
  }
`;

export const ToHomeBtn = styled(NavLink)`
  ${titleText}
  font-size: 15px;
  margin: 0 auto -40px;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;
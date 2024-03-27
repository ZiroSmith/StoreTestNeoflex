import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import LikeImg from "../../Assets/images/icon_like.svg";
import BasketImg from "../../Assets/images/icon_buy.svg";

export const HeaderWrapper = styled.header`
  max-width: 1137px;
  width: 100%;
  height: 60px;
  margin: 0 auto 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
`;

export const Headerlogo = styled.img`
  width: 85px;
  height: 23px;
`;

export const HeaderContainer = styled.div`
  width: 120px;
  display: flex;
`;

export const LikeButton = styled(NavLink)`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const LikeButtonImg = styled.div`
  width: 22px;
  height: 20px;
  background-image: url("${LikeImg}");
  margin-left: 5px; 
`;

export const LikeButtonQuantity = styled.div`
  position: absolute;
  top: 12px;
  right: 4px;
  width: 18px;
  height: 18px;
  padding-top: 1px;
  text-align: center;
  background-color: #ffa542;
  color: white;
  border-radius: 50%;
`;

export const BasketButton = styled(NavLink)`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  padding-right: 7px; 
  justify-content: end;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const BasketButtonImg = styled.div`
  width: 23px;
  height: 23px;
  background-image: url("${BasketImg}");
`;

export const BasketButtonQuantity = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  width: 18px;
  height: 18px;
  padding-top: 1px;
  text-align: center;
  background-color: #ffa542;
  color: white;
  border-radius: 50%;
`;

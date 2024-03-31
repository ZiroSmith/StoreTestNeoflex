import React from "react";
import { page } from "../../Shared/Constants/navigation";
import HeaderLogo from "../../Assets/images/logo.png";

import {
  HeaderWrapper,
  Headerlogo,
  HeaderLink,
  HeaderContainer,
  LikeButton,
  LikeButtonImg,
  LikeButtonQuantity,
  BasketButton,
  BasketButtonImg,
  BasketButtonQuantity,
} from "./style";

function Header({ item }) {
  const dataProduct = JSON.parse(localStorage.getItem("cart")) || [];

  const [counterProduct, setСounterProduct] = React.useState(
    dataProduct.length
  );

  React.useEffect(() => {
    setСounterProduct(dataProduct.length);
    console.log("header__useEffect");
  }, [item]);

  return (
    <HeaderWrapper>
      <HeaderLink to={page.mainPage}>
        <Headerlogo src={HeaderLogo} alt="Logo" />
      </HeaderLink>
      <HeaderContainer>
        <LikeButton to={page.basketPage}>
          <LikeButtonImg />
          <LikeButtonQuantity>{counterProduct}</LikeButtonQuantity>
        </LikeButton>
        <BasketButton to={page.basketPage}>
          <BasketButtonImg />
          <BasketButtonQuantity>{counterProduct}</BasketButtonQuantity>
        </BasketButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
export default Header;

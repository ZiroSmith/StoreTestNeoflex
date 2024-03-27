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

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLink to={page.mainPage}>
        <Headerlogo src={HeaderLogo} alt="Logo" />
      </HeaderLink>
      <HeaderContainer>
        <LikeButton to={page.basketPage}>
          <LikeButtonImg />
          <LikeButtonQuantity>2</LikeButtonQuantity>
        </LikeButton>
        <BasketButton to={page.basketPage}>
          <BasketButtonImg />
          <BasketButtonQuantity>1</BasketButtonQuantity>
        </BasketButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
export default Header;

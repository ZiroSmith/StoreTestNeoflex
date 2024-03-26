//import { page } from '../../Shared/Constants/navigation';
import HeaderLogo from '../../Assets/images/logo.png';

import {
  HeaderWrapper,
  Headerlogo,
  HeaderContainer,
  LikeButton,
  LikeButtonImg,
  LikeButtonQuantity,
  BasketButton,
  BasketButtonImg,
  BasketButtonQuantity
} from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <Headerlogo src={HeaderLogo} alt="Logo"/>
      <HeaderContainer>
        <LikeButton>
          <LikeButtonImg />
          <LikeButtonQuantity>2</LikeButtonQuantity>
        </LikeButton>
        <BasketButton>
          <BasketButtonImg />
          <BasketButtonQuantity>1</BasketButtonQuantity>
        </BasketButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
export default Header;

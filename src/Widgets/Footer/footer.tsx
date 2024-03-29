import { page } from "../../Shared/Constants/navigation";
import FooterLogo from "../../Assets/images/logo.png";
import IconLang from "../../Assets/images/icon_lang.png";
import IconVK from "../../Assets/images/icon_VK.svg";
import IconTelegram from "../../Assets/images/icon_Telegram.svg";
import IconWhatsApp from "../../Assets/images/icon_Whatsapp.svg";

import {
  FooterWrapper,
  Link,
  Footerlogo,
  FooterInfo,
  FooterNaw,
  FooterNawLink,
  FooterLang,
  Сonditions,
  FooterLangContainer,
  LangIcon,
  LangBtn,
  LangBtnYellow,
  FooterLinkContainer,
  FooterLink,
  FooterLinkImg,
} from "./style";

function Footer() {
  return (
    <FooterWrapper>
      <Link to={page.mainPage}>
        <Footerlogo src={FooterLogo} alt="Logo" />
      </Link>
      <FooterInfo>
        <FooterNaw>
          <Link to={page.basketPage}>
            <FooterNawLink>Избранное</FooterNawLink>
          </Link>
          <Link to={page.basketPage}>
            <FooterNawLink>Корзина</FooterNawLink>
          </Link>
          <Link to={page.mainPage}>
            <FooterNawLink>Контакты</FooterNawLink>
          </Link>
        </FooterNaw>
        <FooterLang>
          <Сonditions href="https://vc.ru/flood/612943-42-pravila-idealnogo-klientskogo-servisa-dlya-raznyh-biznes-nish-onlayn-i-oflayn-vzaimodeystviya-s-klientom">Условия сервиса</Сonditions>
          <FooterLangContainer>
            <LangIcon src={IconLang} alt="Icon Lang" />
            <LangBtnYellow>Рус</LangBtnYellow>
            <LangBtn>Eng</LangBtn>
          </FooterLangContainer>
        </FooterLang>
      </FooterInfo>
      <FooterLinkContainer>
        <FooterLink href="https://vk.com/apple.inside">
          <FooterLinkImg src={IconVK} alt="VK" />
        </FooterLink>
        <FooterLink href="https://t.me/apple">
          <FooterLinkImg src={IconTelegram} alt="Telegram" />
        </FooterLink>
        <FooterLink href="tel:+71234567890">
          <FooterLinkImg src={IconWhatsApp} alt="WhatsApp" />
        </FooterLink>
      </FooterLinkContainer>
    </FooterWrapper>
  );
}

export default Footer;

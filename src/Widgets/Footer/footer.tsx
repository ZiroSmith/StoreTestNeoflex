import FooterLogo from "../../Assets/images/logo.png";
import IconLang from "../../Assets/images/icon_lang.png";
import IconVK from "../../Assets/images/icon_VK.svg";
import IconTelegram from "../../Assets/images/icon_Telegram.svg";
import IconWhatsApp from "../../Assets/images/icon_Whatsapp.svg";

import {
  FooterWrapper,
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
      <Footerlogo src={FooterLogo} alt="Logo" />
      <FooterInfo>
        <FooterNaw>
          <FooterNawLink>Избранное</FooterNawLink>
          <FooterNawLink>Корзина</FooterNawLink>
          <FooterNawLink>Контакты</FooterNawLink>
        </FooterNaw>
        <FooterLang>
          <Сonditions>Условия сервиса</Сonditions>
          <FooterLangContainer>
            <LangIcon src={IconLang} alt="Icon Lang" />
            <LangBtnYellow>Рус</LangBtnYellow>
            <LangBtn>Eng</LangBtn>
          </FooterLangContainer>
        </FooterLang>
      </FooterInfo>
      <FooterLinkContainer>
        <FooterLink>
          <FooterLinkImg src={IconVK} alt="VK" />
        </FooterLink>
        <FooterLink>
          <FooterLinkImg src={IconTelegram} alt="Telegram" />
        </FooterLink>
        <FooterLink>
          <FooterLinkImg src={IconWhatsApp} alt="WhatsApp" />
        </FooterLink>
      </FooterLinkContainer>
    </FooterWrapper>
  );
}

export default Footer;

import Card from "../../Shared/Components/BasketCard/card";
import { CARDS_INFO } from "./const";

import {
  Basket,
  BasketStoreContainer,
  BasketStoreTitle,
  BasketCardContainer,
  Payment,
  PaymentPrice,
  PaymentPriceText,
  PaymentPriceSum,
  PaymentBtn,
} from "./styled";

function ShopinngBox() {
  const cards = CARDS_INFO?.map((card) => (
    <Card key={`IC${card.id}`} card={card} />
  ));
  return (
    <Basket>
      <BasketStoreTitle>Корзина</BasketStoreTitle>
      <BasketStoreContainer>
        <BasketCardContainer>{cards}</BasketCardContainer>
        <Payment>
          <PaymentPrice>
            <PaymentPriceText>ИТОГО</PaymentPriceText>
            <PaymentPriceSum>₽ 2 927</PaymentPriceSum>
          </PaymentPrice>
          <PaymentBtn>Перейти к оформлению</PaymentBtn>
        </Payment>
      </BasketStoreContainer>
    </Basket>
  );
}

export default ShopinngBox;

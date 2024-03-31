import React from "react";
import { page } from "../../Shared/Constants/navigation";
import Card from "../../Shared/Components/BasketCard/basketCard";

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
  ToHomeBtn,
} from "./styled";

function ShopinngBox() {
  const [newData, setNewData] = React.useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const totalAmount =
    newData.length !== 0
      ? newData
          .map((item) => item.price * item.quantity)
          .reduce((a, b) => a + b)
      : 0;

  const cardsnew = newData.map((card) => (
    <Card
      key={card.id}
      card={card}
      setNewData={setNewData}
    />
  ));

  React.useEffect(() => {}, [newData]);

  return (
    <Basket>
      <BasketStoreTitle>Корзина</BasketStoreTitle>
      <BasketStoreContainer>
        <BasketCardContainer>{cardsnew}</BasketCardContainer>
        <Payment>
          <PaymentPrice>
            <PaymentPriceText>ИТОГО</PaymentPriceText>
            <PaymentPriceSum>₽ {totalAmount}</PaymentPriceSum>
          </PaymentPrice>
          <PaymentBtn>Перейти к оформлению</PaymentBtn>
          <ToHomeBtn to={page.mainPage}>Вернуться к каталогу</ToHomeBtn>
        </Payment>
      </BasketStoreContainer>
    </Basket>
  );
}

export default ShopinngBox;

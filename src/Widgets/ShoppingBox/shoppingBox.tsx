import React from "react";
import { page } from "../../Shared/Constants/navigation";
import Card from "../../Shared/Components/BasketCard/card";

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
  //const newData = JSON.parse(localStorage.getItem("cart"));
  //const cardsnew = newData.map((card) => <Card key={card.id} card={card} />);

  const [newData, setNewData] = React.useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const handleCartData = () => {
    setNewData(JSON.parse(localStorage.getItem("cart")));
    console.log('handleCartData!!!!!!!!!!!!!!');
  }

  const cardsnew = newData.map((card) => <Card key={card.id} card={card} myFunction={() => handleCartData}/>);

  return (
    <Basket>
      <BasketStoreTitle>Корзина</BasketStoreTitle>
      <BasketStoreContainer>
        <BasketCardContainer>{cardsnew}</BasketCardContainer>
        <Payment>
          <PaymentPrice>
            <PaymentPriceText>ИТОГО</PaymentPriceText>
            <PaymentPriceSum>₽ 2 927</PaymentPriceSum>
          </PaymentPrice>
          <PaymentBtn>Перейти к оформлению</PaymentBtn>
          <ToHomeBtn to={page.mainPage}>Вернуться к каталогу</ToHomeBtn>
        </Payment>
      </BasketStoreContainer>
    </Basket>
  );
}

export default ShopinngBox;

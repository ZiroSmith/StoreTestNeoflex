import React from "react";

import {
  CardContainer,
  QuantityContainer,
  CardImg,
  Quantity,
  QuantityAddBtn,
  QuantityResult,
  QuantityPutAwayBtn,
  CardInfoContainer,
  CardTitle,
  CardPrice,
  ResultContainer,
  DeleteBtn,
} from "./styled";
import CardProps from "./types";

function Card({ card }: CardProps) {
  const OldData = JSON.parse(localStorage.getItem("cart"));
  const [itemCount, setItemCount] = React.useState(
    OldData.find((item) => item.id === card.id).quantity
  );

  const addQuantity = () => {
    const newCartData = JSON.parse(localStorage.getItem("cart"));
    const index = newCartData.findIndex((item) => item.id === card.id);
    newCartData[index].quantity = itemCount + 1;
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setItemCount(itemCount + 1);
  };

  const putAwayQuantity = () => {
    if (itemCount < 2) {
      onDeleted();
      return;
    }
    const newCartData = JSON.parse(localStorage.getItem("cart"));
    const index = OldData.findIndex((item) => item.id === card.id);
    newCartData[index].quantity = itemCount - 1;
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setItemCount(itemCount - 1);
  };



  const onDeleted = () => {
    const OldData = JSON.parse(localStorage.getItem("cart"));
    const newCartData = OldData.filter((item) => item.id !== card.id);
    localStorage.setItem("cart", JSON.stringify(newCartData));

    //Вот тут нужен тригер, который после передам пропсом
    
  };

  return (
    <CardContainer>
      <QuantityContainer>
        <CardImg src={card?.url} alt={card?.alt} />
        <Quantity>
          <QuantityPutAwayBtn onClick={putAwayQuantity} />
          <QuantityResult>{itemCount}</QuantityResult>
          <QuantityAddBtn onClick={addQuantity} />
        </Quantity>
      </QuantityContainer>
      <CardInfoContainer>
        <CardTitle>{card?.name}</CardTitle>
        <CardPrice color="#AAAAAA">
          {card?.price}
          <span> ₽</span>
        </CardPrice>
      </CardInfoContainer>
      <ResultContainer>
        <DeleteBtn onClick={onDeleted} />
        <CardPrice>
          {card?.price}
          <span> ₽</span>
        </CardPrice>
      </ResultContainer>
    </CardContainer>
  );
}

export default Card;

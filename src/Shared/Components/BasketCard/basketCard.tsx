import React from "react";
import { useOutletContext } from "react-router-dom";

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

function Card({ card, setNewData }: CardProps) {
  const OldData = JSON.parse(localStorage.getItem("cart"));
  const [cardCount, setCardCount] = React.useState(
    OldData.find((item) => item.id === card.id).quantity
  );

  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c - 1);

  const addQuantity = () => {
    const newCartData = JSON.parse(localStorage.getItem("cart"));
    const index = newCartData.findIndex((item) => item.id === card.id);
    newCartData[index].quantity = cardCount + 1;
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setCardCount(cardCount + 1);
    setNewData(newCartData);
  };

  const putAwayQuantity = () => {
    if (cardCount < 2) {
      onDeleted();
      return;
    }
    const newCartData = JSON.parse(localStorage.getItem("cart"));
    const index = OldData.findIndex((item) => item.id === card.id);
    newCartData[index].quantity = cardCount - 1;
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setCardCount(cardCount - 1);
    setNewData(newCartData);
  };

  const onDeleted = () => {
    const OldData = JSON.parse(localStorage.getItem("cart"));
    const newCartData = OldData.filter((item) => item.id !== card.id);
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setNewData(newCartData);
    increment();
  };

  return (
    <CardContainer>
      <QuantityContainer>
        <CardImg src={card?.url} alt={card?.alt} />
        <Quantity>
          <QuantityPutAwayBtn onClick={putAwayQuantity} />
          <QuantityResult>{cardCount}</QuantityResult>
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

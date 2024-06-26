import React from "react";
import { useOutletContext } from "react-router-dom";

import {
  CardContainer,
  CardImg,
  CardInfoContainer,
  CardInfo,
  CardBuy,
  CardTitle,
  CardGrade,
  CardGradeIcon,
  CardPrice,
  CardOldPrice,
  CardBuyBtn,
} from "./styled";
import CardProps from "./types";

function Card({ card }: CardProps) {
  const arrDataCards = JSON.parse(localStorage.getItem("cart")) || [];

  const [click, setClick] = React.useState(
    arrDataCards.some((item) => item.id === card.id)
  );

  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);

  const updateSrorage = () => {
    if (localStorage.getItem("cart")) {
      const oldData = JSON.parse(localStorage.getItem("cart")) || [];
      oldData.push(card);
      localStorage.setItem("cart", JSON.stringify(oldData));
      setClick(true);
    } else {
      localStorage.setItem("cart", JSON.stringify([card]));
      setClick(true);
    }
    increment();
  };

  return (
    <CardContainer>
      <CardImg src={card?.url} alt={card?.alt} />
      <CardInfoContainer>
        <CardInfo>
          <CardTitle>{card?.name}</CardTitle>
          <CardGrade>
            <CardGradeIcon />
            {card?.grade}
          </CardGrade>
        </CardInfo>
        <CardBuy>
          <CardPrice>
            {card?.price}
            <span> ₽</span>
          </CardPrice>
          <CardOldPrice>{card?.oldPrice}</CardOldPrice>
          <CardBuyBtn onClick={updateSrorage} disabled={click}>
            {click ? "В корзине" : "Купить"}
          </CardBuyBtn>
        </CardBuy>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default Card;

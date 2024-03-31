import React from "react";

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

  const [isClicked, setIsClicked] = React.useState(
    arrDataCards.some((item) => item.id === card.id)
  );


  const updateSrorage = () => {
    if (localStorage.getItem("cart")) {
      const oldData = JSON.parse(localStorage.getItem("cart")) || [];
      oldData.push(card);
      localStorage.setItem("cart", JSON.stringify(oldData));
      setIsClicked(true);
    } else {
      localStorage.setItem("cart", JSON.stringify([card]));
      setIsClicked(true);
    }
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
          <CardBuyBtn onClick={updateSrorage} disabled={isClicked}>
            {isClicked ? "В корзине" : "Купить"}
          </CardBuyBtn>
        </CardBuy>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default Card;

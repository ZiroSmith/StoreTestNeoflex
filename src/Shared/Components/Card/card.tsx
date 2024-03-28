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
  const updateSrorage = () => {
    if (localStorage.getItem("cart")) {
      const oldData = JSON.parse(localStorage.getItem('cart')) || [];
      oldData.push(card); 
      localStorage.setItem('cart', JSON.stringify(oldData));
    } else {
      localStorage.setItem("cart", JSON.stringify([card]));
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
          <CardBuyBtn onClick={updateSrorage}>Купить</CardBuyBtn>
        </CardBuy>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default Card;

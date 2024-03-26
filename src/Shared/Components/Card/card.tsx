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
          <CardPrice>{card?.price}<span> ₽</span></CardPrice>
          <CardOldPrice>{card?.oldPrice}</CardOldPrice>
          <CardBuyBtn>Купить</CardBuyBtn>
        </CardBuy>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default Card;

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

  const BuyGoods = () => {
    let Basket = JSON.parse(sessionStorage.getItem("price") || "[]"); 
    sessionStorage.setItem(card.id, "1");
    // здесь мы соберём всё то, что запомнили
    let kartochka;
    // перебираем все ячейки во временном хранилище
    for (const key in sessionStorage) {
      // если ячейка не пустая
      if (
        sessionStorage.getItem(key) != null &&
        sessionStorage.getItem(key) != ""
      ) {
        // добавляем её в список для вывода
        kartochka += "\n" + sessionStorage.getItem(key);
      }
    }
    // показываем пользователю, что хранится в памяти страницы
    console.log(kartochka);
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
          <CardBuyBtn onClick={BuyGoods}>Купить</CardBuyBtn>
        </CardBuy>
      </CardInfoContainer>
    </CardContainer>
  );
}

export default Card;

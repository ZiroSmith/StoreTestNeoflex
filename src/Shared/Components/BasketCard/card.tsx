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
  const deleteCard = () => {
    // работает, но карточка исчезает только после обновления страницы
    const OldData = JSON.parse(localStorage.getItem("cart"));
    const itemToDelete = OldData.filter((item) => item.id !== card.id);
    localStorage.setItem("cart", JSON.stringify(itemToDelete));
  };

  return (
    <CardContainer>
      <QuantityContainer>
        <CardImg src={card?.url} alt={card?.alt} />
        <Quantity>
          <QuantityPutAwayBtn />
          <QuantityResult>1</QuantityResult>
          <QuantityAddBtn />
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
        <DeleteBtn onClick={deleteCard} />
        <CardPrice>
          {card?.price}
          <span> ₽</span>
        </CardPrice>
      </ResultContainer>
    </CardContainer>
  );
}

export default Card;

import Card from "../../Shared/Components/Card/card";
import { CARDS_INFO, CARDS_WIRELESS_INFO } from "./const";

import {
  HomeStore,
  HomeStoreContainer,
  HomeStoreTitle,
  CardContainer,
  CardWirelessContainer,
} from "./styled";

function HomePage() {
  const cards = CARDS_INFO?.map((card) => (
    <Card key={`IC${card.id}`} card={card} />
  ));
  const cardsWireless = CARDS_WIRELESS_INFO?.map((card) => (
    <Card key={`IC${card.id}`} card={card} />
  ));
  return (
    <HomeStore>
      <HomeStoreContainer>
        <HomeStoreTitle>Наушники</HomeStoreTitle>
        <CardContainer>{cards}</CardContainer>
      </HomeStoreContainer>
      <HomeStoreContainer>
        <HomeStoreTitle>Беспроводные наушники</HomeStoreTitle>
        <CardWirelessContainer>{cardsWireless}</CardWirelessContainer>
      </HomeStoreContainer>
    </HomeStore>
  );
}

export default HomePage;

import Card from "../../Shared/Components/Card/card";
import { CARDS_INFO, CARDS_WIRELESS_INFO } from "./const";

import {
  Catalog,
  CatalogStoreContainer,
  CatalogStoreTitle,
  CardContainer,
  CardWirelessContainer,
} from "./styled";

function StoreCatalog() {
  const cards = CARDS_INFO?.map((card) => (
    <Card key={`IC${card.id}`} card={card} />
  ));
  const cardsWireless = CARDS_WIRELESS_INFO?.map((card) => (
    <Card key={`IC${card.id}`} card={card} />
  ));

  return (
    <Catalog>
      <CatalogStoreContainer>
        <CatalogStoreTitle>Наушники</CatalogStoreTitle>
        <CardContainer>{cards}</CardContainer>
      </CatalogStoreContainer>
      <CatalogStoreContainer>
        <CatalogStoreTitle>Беспроводные наушники</CatalogStoreTitle>
        <CardWirelessContainer>{cardsWireless}</CardWirelessContainer>
      </CatalogStoreContainer>
    </Catalog>
  );
}

export default StoreCatalog;

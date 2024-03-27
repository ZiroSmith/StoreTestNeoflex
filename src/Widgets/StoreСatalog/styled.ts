import styled from "styled-components";
import { titleText } from "../../Shared/Constants/typography";

export const Catalog = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const CatalogStoreContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`;

export const CatalogStoreTitle = styled.h2`
  ${titleText}
`;

export const CardContainer = styled.div`
  width: 100%;
  margin: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardWirelessContainer = styled(CardContainer)`
  margin-top: 24px;
`;
interface CardProps {
  card?: Card;
  id?: number;
}

type Card = {
  id: number;
  name: string;
  grade: string;
  price: string;
  oldPrice: string;
  url: string;
  alt: string;
};
export default CardProps;

interface CardProps {
  card?: Card;
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

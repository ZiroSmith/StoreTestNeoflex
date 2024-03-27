interface CardProps {
  card?: Card;
  color?: string;
}

type Card = {
  id: number;
  name: string;
  price: string;
  url: string;
  alt: string;
};
export default CardProps;

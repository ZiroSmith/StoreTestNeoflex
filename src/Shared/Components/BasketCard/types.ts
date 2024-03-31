interface CardProps {
  card?: Card;
  color?: string;
}

type Card = {
  id: number;
  name: string;
  price: number;
  url: string;
  alt: string;
  quantity: number;
};
export default CardProps;

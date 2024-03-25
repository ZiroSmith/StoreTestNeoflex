import {
  Card, CardTitle, CardImg, CardSubtitle, CardText,
} from './styled';
import EmployeesCardProps from './types';

function EmployeesCard({ card }: EmployeesCardProps) {
  return (
    <Card>
      <CardTitle>{card?.title}</CardTitle>
      <CardImg src={card?.url} alt={card?.alt} />
      <CardSubtitle>{card?.subtitle}</CardSubtitle>
      <CardText>{card?.text}</CardText>
    </Card>
  );
}

export default EmployeesCard;

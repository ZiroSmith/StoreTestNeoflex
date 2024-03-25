interface EmployeesCardProps {
  card?: Card;
}

type Card = {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  url: string;
  alt: string;
};
export default EmployeesCardProps;

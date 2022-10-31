import { Button,Card } from 'react-bootstrap';
import { ListCart, ListItem } from './List.styled';
const List = ({ items }) => (
  <ListCart>
    {items.map(({ name, description, price }) => (
      <ListItem key={name}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </ListItem>
    ))}
  </ListCart>
);
export default List;

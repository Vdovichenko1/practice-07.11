import { Button} from 'react-bootstrap';
import {ListCart, ListItem} from './List.styled'
const List = ({ items }) => (
  <ListCart>
    {items.map(({ name, id, description, price }) => (
        <ListItem key={id}>
          <ListItem.Header>{name}</ListItem.Header>
          <ListItem.Body>
            <ListItem.Title>{price}</ListItem.Title>
            <ListItem.Text>{description}
            </ListItem.Text>
            <Button variant="primary">Delete</Button>
          </ListItem.Body>
        </ListItem>

    ))}
  </ListCart>
);
export default List;

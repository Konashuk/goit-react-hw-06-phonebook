import { useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {`${name}: ${number}`}
            {/* <Button onClick={() => onDelete(id)}>Delete</Button> */}
            <Button>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

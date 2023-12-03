import { useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';

export const ContactList = () => {
  const dataContacts = useSelector(state => state.contacts);
  console.log(dataContacts);
  return (
    <List>
      {dataContacts &&
        dataContacts.map(({ id, value: { name, number } }) => {
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

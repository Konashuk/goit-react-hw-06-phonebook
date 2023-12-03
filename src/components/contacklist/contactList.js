import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';
import { deleteCont } from 'redux/store';

export const ContactList = () => {
  const dataContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  console.log(dataContacts);

  const updateCont = id => {
    dispatch(deleteCont(id));
  };

  return (
    <List>
      {dataContacts &&
        dataContacts.map(({ id, value: { name, number } }) => {
          return (
            <Item key={id}>
              {`${name}: ${number}`}
              <Button onClick={() => updateCont(id)}>Delete</Button>
            </Item>
          );
        })}
    </List>
  );
};

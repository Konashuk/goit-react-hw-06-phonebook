import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';
import { deleteCont } from 'redux/contactsSlise';

export const ContactList = () => {
  const dataContacts = useSelector(state => state.contacts);
  const dataFilters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return dataContacts.filter(item => {
      return item.value.name.toLowerCase().includes(dataFilters.toLowerCase());
    });
  };

  const updateCont = id => {
    dispatch(deleteCont(id));
  };

  return (
    <List>
      {filterContacts() &&
        filterContacts().map(({ id, value: { name, number } }) => {
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

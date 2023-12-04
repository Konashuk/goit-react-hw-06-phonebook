import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contacklist/contactList';
import { useSelector } from 'react-redux';

export const Phonebooks = () => {
  const dataContacts = useSelector(state => state.contacts);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {dataContacts.length > 0 && <ContactList />}
    </div>
  );
};

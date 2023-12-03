import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contacklist/contactList';

// const KeyLocalContact = 'contacts';

export const Phonebooks = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContact = localStorage.getItem(KeyLocalContact);
  //   if (savedContact !== null) {
  //     return JSON.parse(savedContact);
  //   }
  //   return [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(KeyLocalContact, JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = nameId => {
  //   setContacts(prevCont => prevCont.filter(item => item.id !== nameId));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm addContact={addContact} /> */}
      <ContactForm />
      {/* <h2>Contacts</h2>
      <Filter filters={filter} onUpdateFilter={filterByName} /> */}
      <Filter />
      {/* {contacts.length > 0 && (
        <ContactList names={visibleName} onDelete={deleteContact} />
   
      )} */}
      <ContactList />
    </div>
  );
};

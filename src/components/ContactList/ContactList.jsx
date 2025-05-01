import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <Contact contact={contact} deleteUser={deleteUser} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

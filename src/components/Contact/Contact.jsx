import { FaUserCircle, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <>
      <div className={s.inner}>
        <h3>
          <FaUserCircle /> {name}
        </h3>
        <a href={`tel:${number}`}>
          <FaPhoneAlt /> {number}
        </a>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

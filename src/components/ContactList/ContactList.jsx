import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}:{number} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.lenght === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={uuidv4()} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;

import { PersonItem } from '../person-item/person-item.js';

export const PersonList = ({ persons, onEdit, onDelete }) => {
  return (
    <div className='container'>
      {persons.map((person) => (
        <PersonItem
          key={person.id}
          person={person}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

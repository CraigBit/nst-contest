import './style.css';
import avatarPlaceholder from '../../img/avatar-placeholder.jpg';

export const PersonItem = ({ person, onEdit, onDelete }) => {
  return (
    <div className='person'>
      <div className='person__image'>
        <img src={avatarPlaceholder} alt='not found' />
      </div>
      <div className='person__body body'>
        <div className='body__info'>
          <div className='body__info-firstname'>{person.firstName}</div>
          <div className='body__info-lastname'>{person.lastName}</div>
        </div>
        <div className='body__controls controls'>
          <div className='controls__buttons'>
            <div
              onClick={() =>
                onEdit(person.id, person.firstName, person.lastName)
              }
              className='controls__buttons-edit'></div>
            <div
              onClick={() => onDelete(person.id)}
              className='controls__buttons-delete'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

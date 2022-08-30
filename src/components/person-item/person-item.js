import './style.css';
import avatarPlaceholder from '../../img/avatar-placeholder.jpg';

export const PersonItem = () => {
  return (
    <div className='person'>
      <div className='person__image'>
        <img src={avatarPlaceholder} alt='not found' />
      </div>
      <div className='person__body body'>
        <div className='body__info'>
          <div className='body__info-name'>John</div>
          <div className='body__info-surname'>Boo</div>
        </div>
        <div className='person__controls controls'>
          <div className='controls__body'>
            <div className='controls__body-edit'></div>
            <div className='controls__body-delete'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

import './style.css';

export const PersonModal = ({ head }) => {
  return (
    <div className='person-modal'>
      <div className='person-modal__content'>
        <div className='person-modal__head'>{head}</div>
        <div className='person-modal__body'>
          <div className='person-modal__back'>Назад к списку</div>
          <form className='person-modal__form modal-form'>
            <input
              className='modal-form__field'
              type='text'
              placeholder='Введите имя сотрудника'
              required={true}
            />
            <input
              className='modal-form__field'
              type='text'
              placeholder='Введите фамилию сотрудника'
              required={true}
            />
            <button className='person-modal__save' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

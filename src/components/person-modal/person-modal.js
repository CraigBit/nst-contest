import { useEffect, useState } from 'react';
import './style.css';

export const PersonModal = ({ onClose, onServer, head, ...props }) => {
  const [personData, setPersonData] = useState({
    firstName: '',
    lastName: '',
  });

  const fetchData = async () => {
    let url = `http://localhost:3001/api/v1/person/${props.personId}`;
    const res = await fetch(url);
    const json = await res.json();
    const firstName = await json.firstName;
    const lastName = await json.lastName;
    setPersonData({ ...personData, firstName: firstName, lastName: lastName });
  };

  useEffect(() => {
    if (props.personId) {
      fetchData();
    }
  }, [props.personId]);

  const callbacks = {
    onSubmit: async (e) => {
      e.preventDefault();
      await onServer(personData, props.personId);
      setPersonData({ firstName: '', lastName: '' });
    },
    onFirstNameChange: (e) => {
      setPersonData({ ...personData, firstName: e.target.value });
    },
    onLastNameChange: (e) => {
      setPersonData({ ...personData, lastName: e.target.value });
    },
  };

  return (
    <div className='person-modal'>
      <div className='person-modal__content'>
        <div className='person-modal__head'>{head}</div>
        <div className='person-modal__body'>
          <div onClick={onClose} className='person-modal__back'>
            Назад к списку
          </div>
          <form
            onSubmit={callbacks.onSubmit}
            className='person-modal__form modal-form'>
            <input
              className='modal-form__field'
              type='text'
              placeholder='Введите имя сотрудника'
              value={personData.firstName}
              onChange={callbacks.onFirstNameChange}
              required={true}
            />
            <input
              className='modal-form__field'
              type='text'
              placeholder='Введите фамилию сотрудника'
              value={personData.lastName}
              onChange={callbacks.onLastNameChange}
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

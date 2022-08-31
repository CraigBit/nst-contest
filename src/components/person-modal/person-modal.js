import { useEffect, useState } from 'react';
import { Spinner } from '../spinner/spinner.js';
import './style.css';

export const PersonModal = ({ onClose, onServer, head, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [personData, setPersonData] = useState({
    firstName: '',
    lastName: '',
  });

  const fetchPerson = async () => {
    try {
      setLoading(true);
      const res = await props.onGetPerson();
      setPersonData({
        ...personData,
        firstName: res.firstName,
        lastName: res.lastName,
      });
      setLoading(false);
    } catch {
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (props.onGetPerson) {
      fetchPerson();
    }
  }, []);

  const CALLBACKS = {
    // отправка формы
    onSubmit: async (e) => {
      e.preventDefault();
      await onServer(personData);
    },
    // изменение имени
    onFirstNameChange: (e) => {
      setPersonData({ ...personData, firstName: e.target.value });
    },
    // изменение фамилии
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
          <Spinner
            active={loading}
            view='spinner'
            className='person-modal__spinner'>
            <form
              onSubmit={CALLBACKS.onSubmit}
              className='person-modal__form modal-form'>
              <input
                className='modal-form__field'
                type='text'
                placeholder='Введите имя сотрудника'
                value={personData.firstName}
                onChange={CALLBACKS.onFirstNameChange}
                required={true}
              />
              <input
                className='modal-form__field'
                type='text'
                placeholder='Введите фамилию сотрудника'
                value={personData.lastName}
                onChange={CALLBACKS.onLastNameChange}
                required={true}
              />
              <button className='person-modal__save' type='submit'>
                Сохранить
              </button>
            </form>
          </Spinner>
        </div>
      </div>
    </div>
  );
};

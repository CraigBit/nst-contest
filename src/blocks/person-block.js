import { useState, useEffect } from 'react';
import { Spinner } from '../components/spinner/spinner.js';
import { PersonList } from '../components/person-list/person-list.js';
import { PersonAdd } from '../components/person-add/person-add.js';
import { PersonModal } from '../components/person-modal/person-modal.js';
import { PersonService } from '../api/person-service.js';

export const PersonBlock = ({ showToast }) => {
  const [persons, setPersons] = useState([]);
  const [personId, setPersonId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState('');

  const API_SERVICE = new PersonService();

  const fetchPersons = async () => {
    try {
      setLoading(true);
      const response = await API_SERVICE.getPersons();
      setPersons(response);
      setLoading(false);
    } catch {
      showToast('ошибка загрузки');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const CALLBACKS = {
    // удалить сотрудника
    onDelete: async (id) => {
      try {
        setLoading(true);
        await API_SERVICE.deletePerson(id);
        await fetchPersons();
        showToast('удалено');
      } catch {
        showToast('ошибка удаления');
      } finally {
        setLoading(false);
      }
    },

    // создать сотрудника
    onCreatePerson: async (data) => {
      try {
        await API_SERVICE.createPerson(data);
        await fetchPersons();
        showToast('добавлено');
      } catch {
        showToast('ошибка отправки');
      }
    },

    // изменить сотрудника
    onEditPerson: async (data) => {
      try {
        await API_SERVICE.editPerson(data, personId);
        await fetchPersons();
        setIsModalOpen('');
        showToast('отредактировано');
      } catch {
        showToast('ошибка редактирования');
      }
    },

    // получить фамилию и имя сотрудника
    onGetPerson: async (id) => {
      try {
        const response = await API_SERVICE.getPerson(id);
        const result = {
          firstName: response.firstName,
          lastName: response.lastName,
        };
        return result;
      } catch {
        showToast('ошибка загрузки');
        setIsModalOpen('');
      }
    },
  };

  return (
    <>
      <Spinner active={loading} view='wrapper'>
        <PersonList
          persons={persons}
          onEdit={(id) => {
            setPersonId(id);
            setIsModalOpen('edit');
          }}
          onDelete={CALLBACKS.onDelete}
        />
        <PersonAdd onOpen={() => setIsModalOpen('add')} />
        {isModalOpen === 'add' && (
          <PersonModal
            onClose={() => setIsModalOpen('')}
            onServer={CALLBACKS.onCreatePerson}
            head='Создание сотрудника'
          />
        )}
        {isModalOpen === 'edit' && (
          <PersonModal
            onClose={() => setIsModalOpen('')}
            onServer={CALLBACKS.onEditPerson}
            head='Редактирование сотрудника'
            onGetPerson={() => CALLBACKS.onGetPerson(personId)}
          />
        )}
      </Spinner>
    </>
  );
};

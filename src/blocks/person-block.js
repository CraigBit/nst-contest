import { useState, useEffect } from 'react';
import { Spinner } from '../components/spinner/spinner.js';
import { PersonList } from '../components/person-list/person-list.js';
import { PersonAdd } from '../components/person-add/person-add.js';
import { PersonModal } from '../components/person-modal/person-modal.js';
import { PersonService } from '../api/person-service.js';

export const PersonBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState('');
  const [personId, setPersonId] = useState(null);
  const [persons, setPersons] = useState([]);

  const fetchData = async () => {
    const response = await PersonService.getPersons();
    setPersons(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async (id) => {
    await PersonService.deletePerson(id);
    await fetchData();
  };

  const onCreatePerson = async (data) => {
    await PersonService.createPerson(data);
    await fetchData();
  };

  const onEditPerson = async (data, id) => {
    await PersonService.editPerson(data, id);
    await fetchData();
    setIsModalOpen('');
  };

  return (
    <>
      <Spinner>
        <PersonList
          persons={persons}
          onEdit={(id) => {
            setPersonId(id);
            setIsModalOpen('edit');
          }}
          onDelete={onDelete}
        />
        <PersonAdd onOpen={() => setIsModalOpen('add')} />
        {isModalOpen === 'add' && (
          <PersonModal
            onClose={() => setIsModalOpen('')}
            onServer={onCreatePerson}
            head='Создание сотрудника'
          />
        )}
        {isModalOpen === 'edit' && (
          <PersonModal
            onClose={() => setIsModalOpen('')}
            onServer={onEditPerson}
            head='Редактирование сотрудника'
            personId={personId}
          />
        )}
      </Spinner>
    </>
  );
};

import './style.css';

export const PersonAdd = ({ onOpen }) => {
  return (
    <div className='container'>
      <button onClick={onOpen} className='person-add'>
        Добавить сотрудника
      </button>
    </div>
  );
};

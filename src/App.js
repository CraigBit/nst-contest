import './App.css';
import { PersonTable } from './components/person-table/person-table.js';
import { PersonAdd } from './components/person-add/person-add.js';
import { PersonItem } from './components/person-item/person-item.js';
import { PersonModal } from './components/person-modal/person-modal.js';

function App() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <PersonTable />
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonAdd />
        </div>
        {/* <PersonModal head='Создание сотрудника' /> */}
      </main>
    </>
  );
}

export default App;

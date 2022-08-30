import './App.css';
import { PersonAdd } from './components/person-add/person-add.js';
import { PersonItem } from './components/person-item/person-item.js';

function App() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='description'>
            <div className='description__name'>Имя</div>
            <div className='description__surname'>Фамилия</div>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <PersonItem />
          <PersonAdd />
        </div>
      </main>
    </>
  );
}

export default App;

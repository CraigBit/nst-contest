import './App.css';
import { PersonTable } from './components/person-table/person-table.js';
import { PersonBlock } from './blocks/person-block.js';
import { Toast } from './components/toast/toast.js';
import checkIcon from './img/toast/check.svg';
import errorIcon from './img/toast/error.svg';
import infoIcon from './img/toast/info.svg';
import warningIcon from './img/toast/warning.svg';

function App() {
  const TOAST_LIST = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon,
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#d9534f',
      icon: errorIcon,
    },
    {
      id: 3,
      title: 'Info',
      description: 'This is an info toast component',
      backgroundColor: '#5bc0de',
      icon: infoIcon,
    },
    {
      id: 4,
      title: 'Warning',
      description: 'This is a warning toast component',
      backgroundColor: '#f0ad4e',
      icon: warningIcon,
    },
  ];

  return (
    <>
      <header className='header'>
        {/* <Toast toastList={TOAST_LIST} position='top-right' /> */}
        <PersonTable />
      </header>
      <main className='main'>
        <PersonBlock />
      </main>
    </>
  );
}

export default App;

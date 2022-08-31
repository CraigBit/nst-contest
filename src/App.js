import './App.css';
import { useState } from 'react';
import { PersonTable } from './components/person-table/person-table.js';
import { PersonBlock } from './blocks/person-block.js';
import { ToastList } from './components/toast-list/toast-list.js';
import { TOAST_PROPERTIES } from './components/toast-list/toast-properties.js';

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const newToast = { id: Date.now(), ...toast };
    setToasts([...toasts, newToast]);
  };

  const showToast = (type) => {
    const toastProperties = TOAST_PROPERTIES.find(
      (toast) => toast.title === type
    );
    addToast(toastProperties);
  };

  return (
    <>
      <header className='header'>
        <ToastList toasts={toasts} setToasts={setToasts} position='top-left' />
        <PersonTable />
      </header>
      <div className='main'>
        <PersonBlock showToast={showToast} />
      </div>
    </>
  );
}

export default App;

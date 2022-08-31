import './style.css';
import { useCallback, useEffect } from 'react';

export const ToastList = ({ toasts, setToasts, position }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastItem = toasts.findIndex((toast) => toast.id === id);
      toasts.splice(toastItem, 1);
      setToasts([...toasts]);
    },
    [toasts, setToasts]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        deleteToast(toasts[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts, deleteToast]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`notification-toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}>
            <div>
              <div className='notification-image'>
                <img src={toast.icon} alt='' />
              </div>
              <div className='notification-message'>{toast.message}</div>
            </div>
            <div
              onClick={() => deleteToast(toast.id)}
              className='notification-button'>
              &#10008;
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

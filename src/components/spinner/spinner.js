import './style.css';

export const Spinner = ({ children, active, view }) => {
  if (active && view === 'spinner') {
    return <div className='spinner'></div>;
  } else if (active && view === 'wrapper') {
    return <div className='wrapper'>{children}</div>;
  } else {
    return children;
  }
};

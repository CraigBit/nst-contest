import './style.css';

export const Spinner = ({ children, acitve }) => {
  if (acitve) {
    return <div className='spinner'>{children}</div>;
  } else {
    return children;
  }
};

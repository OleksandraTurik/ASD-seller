import React from 'react';

const DeleteTrash = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    position: 'absolute',
    top: '30%',
    bottom: '0px',
    right: '30%',
    transform: 'translate(-50%, 50%)',
  };
  return (
    <div style={style}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="css-12bgiz4"
      >
        <path
          d="M7 8v12h10V8h2v12l-2 1.998H7L5 20V8h2zm4 0v9l-1 1-1-1V8h2zm4 0v9l-1 1-1-1V8h2zm-.958-6 1.999 2h3L20 5v1H4V5l1-1h3.04l2.002-2h4z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default DeleteTrash;

import React from 'react';


export default ({disabled, onClick, btnType, children}) =>
 <p className="control">
      <button 
        className={"button is-outlined is-rounded is-medium is-" + btnType}
        disabled={!disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </p>
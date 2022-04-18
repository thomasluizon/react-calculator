import React from 'react';
import './button.css';

export default props => {
   return (
      <button
         onClick={() => props.click && props.click(props.label)}
         className={`
      button
      ${props.className}
   `}
      >
         {props.label}
      </button>
   );
};

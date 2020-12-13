import React from 'react';
import './Spinner.css';


let Spinner = function() {
  return (
    <div className="loader-spinner">
      <div className="loader-spinner-child">
        <div className="custom-spinner"/>
      </div>
    </div>
  )
}

export default Spinner;

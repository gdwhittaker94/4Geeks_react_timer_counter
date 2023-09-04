import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';


const Buttons = () => {
    return (
      <div className='buttonContainer'>
        <button className='button'><FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}} className='icon'/></button>
        <button className='button'>Reset</button>
        <button className='button'><FontAwesomeIcon icon={faHourglass} style={{color: "#ffffff",}} className='icon'/></button>
      </div>
      
      
  );
}

export default Buttons
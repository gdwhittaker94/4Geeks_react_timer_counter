import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({timer, reset, countdown}) => {

    return (
      <div className='buttonContainer'>
        {/* Timer */}
        <button className='button button-timer' onClick={timer}>
          <FontAwesomeIcon icon={faClock} style={{color: "#000000",}} className='icon'/>
        </button>
        {/* Reset */}
        <button className='button button-reset' onClick={reset}>
          Reset
        </button>
        {/* Countdown */}
        <button className='button' onClick={countdown}>
          <FontAwesomeIcon icon={faHourglass} style={{color: "#ffffff",}} className='icon'/>
        </button>
      </div>
      
  );
}

export default Buttons
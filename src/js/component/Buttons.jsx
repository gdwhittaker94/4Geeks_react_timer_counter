import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({pausePlay, reset, countdown}) => {

    return (
      <div className='buttonContainer'>
        <button className='button' onClick={pausePlay}>
          <FontAwesomeIcon icon={faPlay} style={{color: "#ffffff",}} className='icon icon--play'/>
          <FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}} className='icon'/>
        </button>
        <button className='button' onClick={reset}>Reset</button>
        {/* <button className='button' onClick={countdown}><FontAwesomeIcon icon={faHourglass} style={{color: "#ffffff",}} className='icon'/></button> */}
      </div>
      
  );
}

export default Buttons
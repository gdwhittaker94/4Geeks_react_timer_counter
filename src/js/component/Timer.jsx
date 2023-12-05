import React from 'react';

const Timer = ({second, minute, hour}) => {
  
  return (
    <div className='timer'>
      <span className='timer__numbers'>
        {' '}{hour < 10 ? `0${hour}` : hour} : {' '}{minute < 10 ? `0${minute}` : minute} :{' '}{second < 10 ? `0${second}` : second}
      </span>
    </div>
  );
};

export default Timer;
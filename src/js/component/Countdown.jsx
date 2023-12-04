import React from 'react';

const Countdown = ({hour, minute, second}) => {
  
  return (
    <div className='counter'>
      <span className='counter__numbers counter--countdown'>
        {' '}{hour < 10 ? `0${hour}` : hour} : {' '}{minute < 10 ? `0${minute}` : minute} :{' '}{second < 10 ? `0${second}` : second}
      </span>
    </div>
  );
};

export default Countdown;
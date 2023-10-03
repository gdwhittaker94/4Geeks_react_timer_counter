import React from 'react';

const Counter = ({second, minute, hour}) => {
  
  return (
    <div className='counter'>
      <span className='counter__numbers'>
        {' '}{hour < 10 ? `0${hour}` : hour} : {' '}{minute < 10 ? `0${minute}` : minute} :{' '}{second < 10 ? `0${second}` : second}
      </span>
    </div>
  );
};

export default Counter;
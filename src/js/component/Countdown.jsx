import React from 'react';

const Countdown = ({CDhour, CDminute, CDsecond}) => {
  
  return (
    <div className='timer'>
      <span className='timer__numbers countdown'>
        {' '}{CDhour < 10 ? `0${CDhour}` : CDhour} : {' '}{CDminute < 10 ? `0${CDminute}` : CDminute} :{' '}{CDsecond < 10 ? `0${CDsecond}` : CDsecond}
      </span>
    </div>
  );
};

export default Countdown;
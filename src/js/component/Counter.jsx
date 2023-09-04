import React, { useEffect, useState } from 'react';
import Header from './Header'

const Counter = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevSecond) => { // prevSecond = Hook-local variable, instead of using 'external' second variable
        if (prevSecond === 59) { // if second = 59 secs
          setMinute((prevMinute) => {
            if (prevMinute === 59) {  // && if minute = 59m
              setHour((prevHour) => prevHour + 1); // Increment hour by 1
              return 0; // Then reset minute back to 0 
            } else { 
              return prevMinute + 1; // Otherwise, (if not 59m) increment minute
            }
          });
          return 0; // Then reset second back to 0
        } else { 
          return prevSecond + 1; // Otherwise increment second
        }
      });
    }, 1000); // Do this every 1 second 

    return () => {
      clearInterval(intervalId); // cleanup function: prevents interval from continuing between unmounting and mounting and going out of sync 
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return ( // The component itself 
    <div className='counter'>
      <Header/>
      <span className='counter__numbers'>
        {' '}{hour < 10 ? `0${hour}` : hour} : {' '}{minute < 10 ? `0${minute}` : minute} :{' '}{second < 10 ? `0${second}` : second}
      </span>
    </div>
  );
};

export default Counter;
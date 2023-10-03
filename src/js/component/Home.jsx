import React, { useState, useEffect } from "react";
import Header from './Header'
import SecondsCounter from "./Counter";
import Buttons from './Buttons';

const Home = () => {

	// COUNTER COMPONENT STATE
	const [second, setSecond] = useState(0);
 	const [minute, setMinute] = useState(0);
  	const [hour, setHour] = useState(0);
	const [intervalId, setIntervalId] = useState(null); // Stores built-in interval ID returned by 'setInterval' function (which keeps track of which interval we're on) 

	// BUTTONS COMPONENT STATE
	const [isCounting, setIsCounting] = useState(false); // UP
	const [isTiming, setIsTiming] = useState(false) // DOWN

	// COUNTER EFFECT
	useEffect(() => {
		if(isCounting){
			// This functions creates a new interval, each interval has an ID
			const id = setInterval(() => { 
				// prevSecond = Hook-local variable, instead of using 'external' second variable
				setSecond((prevSecond) => { 
					// if second = 59 secs
					if (prevSecond === 59) { 
					setMinute((prevMinute) => {
						// && if minute = 59m
						if (prevMinute === 59) {  
						// Increment hour by 1
						setHour((prevHour) => prevHour + 1); 
						// Then reset minute back to 0 
						return 0; 
						} else { 
						// Otherwise, if not 59m, increment minute
						return prevMinute + 1; 
						}
					});
					// Then reset second back to 0
					return 0; 
					} else { 
					// Otherwise increment second
					return prevSecond + 1; 
					}
				});
				// Do this every second 
				}, 1000); 
				// Stores interval ID created on each execution 
				setIntervalId(id); 
		} else {
			// Clear the interval when pausing --> ensures timer stops updating when paused 
			clearInterval(intervalId); 
		}
		return () => {
			// cleanup function: prevents interval from continuing between unmounting and mounting and going out of sync 
			clearInterval(intervalId); 
		};
		// Dependency array means this effect runs only when "isCounting" = true	
	}, [isCounting]); 


	// BUTTON COMPONENT EFFECTS
	const pausePlay = () => {
		setIsCounting(!isCounting);
		setIsTiming(false);
	} 

	const reset = () => {
		clearInterval(intervalId);
		setSecond(0);
		setMinute(0);
		setHour(0);
		setIsCounting(false);
		setIsTiming(true);
	}

	

	// VISUAL COMPONENT 
	return <div className="container">
			<Header/>
			<SecondsCounter second={second} minute={minute} hour={hour}/>
			<Buttons pausePlay={pausePlay} reset={reset} /*countdown={countdown}*/ />
		   </div>
};

export default Home;

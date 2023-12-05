import React, { useState, useEffect } from "react";
import Header from './Header'
import SecondHeader from './SecondHeader'
import Timer from "./Timer";
import Countdown from "./Countdown"
import Buttons from './Buttons';

const Home = () => {

	// --- STATE ------------------------------------------------------------

	// TIMER USE_STATE
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(0);
	const [hour, setHour] = useState(0);
	const [timerintervalId, setTimerIntervalId] = useState(null); //* 
	const [isTiming, setIsTiming] = useState(false);

	// COUNTDOWN USE_STATE 
	const [CDsecond, setCDSecond] = useState(0);
	const [CDminute, setCDMinute] = useState(0);
	const [CDhour, setCDHour] = useState(0);
	const [CDintervalId, setCDIntervalId] = useState(null); //* 

	// * Stores built-in interval ID returned by 'setInterval' function (which keeps track of which interval we're on) 

	// COUNTDOWN LOCAL STATE
	let hours;
	let minutes;
	let seconds;

	// --- RESET ------------------------------------------------------------

	// RESET BUTTON 
	const reset = () => {
		setSecond(0);
		setMinute(0);
		setHour(0);
		set_Hour(0);
		set_Minute(0);
		set_Second(0);
		setIsTiming(false);
		clearInterval(CDintervalId);
	}

	// --- TIMER --------------------------------------------------------

	// TIMER BUTTON
	const timer = () => {
		setIsTiming(!isTiming);
	}

	// TIMER USE_EFFECT
	useEffect(() => {
		if (isTiming) {
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
			setTimerIntervalId(id);
		} else {
			// Clear the interval when pausing --> ensures timer stops updating when paused 
			clearInterval(timerintervalId);
		}
		return () => {
			// cleanup function: prevents interval from continuing between unmounting and mounting and going out of sync 
			clearInterval(timerintervalId);
		};
		// Dependency array means this effect runs only when "isTiming" = true	
	}, [isTiming]);


	// --- COUNTDOWN ----------------------------------------------------------

	function set_Hour(currentHour) {
		hours = currentHour;
		setCDHour(currentHour);
	}
	function set_Minute(currentMinute) {
		minutes = currentMinute;
		setCDMinute(currentMinute);
	}
	function set_Second(currentSecond) {
		seconds = currentSecond;
		setCDSecond(currentSecond);
	}
	
	// COUNTING DOWN USE_EFFECT
	const countdownGo = (hours, minutes, seconds) => {
		// console.log("Received --- hours:", hours, "minutes:", minutes, "seconds:", seconds) // Correct input

		const id = setInterval(() => {
			console.log("seconds", seconds)
			if (seconds > 0) {
				seconds -= 1
				set_Second(seconds);
				// console.log("CDSec:", CDsecond) // Shows 0
			}
			else if (minutes > 0) {
				console.log("minutes", minutes)
				minutes -= 1
				set_Minute(minutes);
				// console.log("CDMin:", CDminute) // Shows 0 
				seconds = 60
			}
			else if (hours > 0) {
				console.log("hours", hours)
				hours -= 1
				set_Hour(hours);
				// console.log("CDHour:", CDhour) // Shows 0 
				minutes = 60
				seconds = 60
			} else {
				alert("Countdown Finished!");
				clearInterval(id); // Clear the interval for the countdown
			}
		}, 1000);
		// Stores interval ID created on each execution 
		setCDIntervalId(id);
		// console.log("interval-id", id) // shows id
	}

	// COUNTDOWN BUTTON 
	const countdownPress = () => {
		// Set local variables through prompts
		hours = (parseInt(prompt("How many hours?"), 10));
		minutes = (parseInt(prompt("How many minutes?"), 10));
		seconds = (parseInt(prompt("How many seconds?"), 10));

		// Function calls: Set all Countdown variables 
		set_Hour(hours);
		set_Minute(minutes);
		set_Second(seconds);

		// Function call: Begins visable countdown 
		countdownGo(hours, minutes, seconds + 1)
	}


	// --- VISUAL COMPONENT ----------------------------------------------------

	return <div className="container">
		<Header />
		<Timer second={second} minute={minute} hour={hour} />
		<SecondHeader />
		<Countdown CDhour={CDhour} CDminute={CDminute} CDsecond={CDsecond} />
		<Buttons timer={timer} reset={reset} countdown={countdownPress} />
	</div>
};

export default Home;

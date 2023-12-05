import React, { useState, useEffect } from "react";
import Header from './Header'
import SecondHeader from './SecondHeader'
import Timer from "./Timer";
import Countdown from "./Countdown"
import Buttons from './Buttons';

const Home = () => {

	// --- STATE ------------------------------------------------------------

	// TIMER STATE
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(0);
	const [hour, setHour] = useState(0);
	const [timerintervalId, setTimerIntervalId] = useState(null); //* 
	const [isTiming, setIsTiming] = useState(false);

	// COUNTDOWN STATE 
	const [CDsecond, setCDSecond] = useState(0);
	const [CDminute, setCDMinute] = useState(0);
	const [CDhour, setCDHour] = useState(0);
	const [CDintervalId, setCDIntervalId] = useState(null); //* 
	// const [isCountingDown, setIsCountingDown] = useState(false)

	// COUNTDOWN LOCAL STATE
	let isCountingDown = false;
	let hours;
	let minutes;
	let seconds;

	// * Stores built-in interval ID returned by 'setInterval' function (which keeps track of which interval we're on) 

	// --- FUNCTIONS --------------------------------------------------------

	// TIMER BUTTON
	const timer = () => {
		setIsTiming(!isTiming);
	}

	// RESET BUTTON 
	const reset = () => {
		setSecond(0);
		setMinute(0);
		setHour(0);
		setCDSecond(0);
		setCDMinute(0);
		setCDHour(0);
		setIsTiming(false);
		isCountingDown = false;
	}

	// COUNTING DOWN USE_EFFECT
	const countdownStart = (hours, minutes, seconds) => {
		console.log("Received --- hours:", hours, "minutes:", minutes, "seconds:", seconds)

		const id = setInterval(() => {
			// If above 0 seconds
			console.log("seconds", seconds)
			if (seconds > 0) {
				seconds -= 1
				setCDSecond(seconds);
				console.log("CDSec:", CDsecond)
			}
			// If at 0 seconds 
			else if (minutes > 0) {
				console.log("minutes", minutes)
				minutes -= 1
				setCDMinute(minutes);
				console.log("CDMin:", CDminute)
				seconds = 59
			}
			// If at 0 seconds and 0 minutes
			else if (hours > 0) {
				console.log("hours", hours)
				hours -= 1
				setCDHour(hours);
				console.log("CDHour:", CDhour)
				minutes = 59
				seconds = 59
			} else {
				alert("Countdown Finished!");
				clearInterval(id); // Clear the interval for the countdown
				isCountingDown = false;
			}
		}, 1000);
		// Stores interval ID created on each execution 
		setCDIntervalId(id);
		console.log("interval-id", id)
	}

	// COUNTDOWN BUTTON 
	const countdown = () => {
		console.log("pre-isCountingDown:", isCountingDown)
		isCountingDown = true
		console.log("post-isCountingDown:", isCountingDown)

		hours = (parseInt(prompt("How many hours?"), 10));
		minutes = (parseInt(prompt("How many minutes?"), 10));
		seconds = (parseInt(prompt("How many seconds?"), 10));
		console.log("hours:", hours, "minutes:", minutes, "seconds:", seconds)

		countdownStart(hours, minutes, seconds + 1)
	}

	// --- USE_EFFECTS ---------------------------------------------------------

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


	// --- VISUAL COMPONENT ----------------------------------------------------

	return <div className="container">
		<Header />
		<Timer second={second} minute={minute} hour={hour} />
		<SecondHeader />
		<Countdown CDhour={CDhour} CDminute={CDminute} CDsecond={CDsecond} />
		<Buttons timer={timer} reset={reset} countdown={countdown} />
	</div>
};

export default Home;

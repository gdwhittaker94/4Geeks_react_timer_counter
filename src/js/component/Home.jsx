import React from "react";
import SecondsCounter from "./Counter";
import Header from './Header'
import Buttons from './Buttons';

const Home = () => {
	return <div className="container">
			<Header/>
			<SecondsCounter/>
			<Buttons/>
		   </div>
};

export default Home;

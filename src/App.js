import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Card from "./components/Card";
import Skills from "./components/Skills";
import data from "./components/data";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const card = data.map((item) => {
		return (
			<Card
				key={item.id}
				title={item.title}
				badge1={item.badge1}
				badge2={item.badge2}
				badge3={item.badge3}
				description={item.description}
				githubLink={item.githubLink}
			/>
		);
	});

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/projects"
						element={<div className="card-container">{card}</div>}
					/>

					{/* <Skills />
      <Card

      
        title="Guess-My-Number"
        badge1="images/badges/JavaScript.png"
        badge2="images/badges/HTML.png"
        badge3="images/badges/CSS.png"
        description="A game with a scoring system that measures the highest score obtained
        as you are guessing the correct numbers."
  />*/}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

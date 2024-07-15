// App.js
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
	return (
		<>
		
		<div style={{backgroundColor: "black"}}>
			<Navbar />
			<Hero/>
			<About/>
			<Skills/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
		</>
	
	);
}

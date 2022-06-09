import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<main className="flex-container landing-main">
			<div>
				<h1 className="text-heading text-white">Ani Chat</h1>
				<p className="text-huge text-white">
				A social media for the new generation
				</p>
				<div className="landing-links">
				<Link to='/signup'>Create an account</Link>
				<Link to='/login'>Already have an account?</Link>
				</div>
			</div>
			<div className="hero-container">
				<img
					src="https://res.cloudinary.com/dwubqdebj/image/upload/v1654795044/ani-chat/Texting-pana_fhdg9r.svg"
					alt="Hero"
				/>
			</div>
		</main>
	);
}
export default Home;

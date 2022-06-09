import { NavLink } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
	return (
		<ul className="tab text-white">
			<li className="text-center">
				<NavLink to="/feed/personalized" className="tab-link text-white">
					<span>Personalized</span>
				</NavLink>
			</li>
			<li className="text-center">
				<NavLink to="/feed/trending" className="tab-link text-white">
					<span>Trending</span>
				</NavLink>
			</li>
			<li className="text-center">
				<NavLink to="/feed/new" className="tab-link text-white">
					<span>New</span>
				</NavLink>
			</li>
		</ul>
	);
}
export default Tabs;

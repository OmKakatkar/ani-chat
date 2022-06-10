import { faBars, faClover, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { handleLogout } from "../../features/Auth/authSlice";

import "./Header.css";
function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<header className="header flex">
			<div className="flex">
				<FontAwesomeIcon icon={faBars} className="header-icon text-xlg" />
				<div className="flex header-brand">
					<FontAwesomeIcon icon={faClover} className="header-logo text-huge" />
					<h2 className="header-text text-xlg">ANICHAT</h2>
				</div>
			</div>
			<div className="header-searchbar-wrapper">
				<input type="search" className="header-searchbar text-white" />
				<button className="btn">
					<FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
				</button>
				<button
					className="btn bg-green rounded"
					onClick={() => {
						dispatch(handleLogout());
						navigate("/");
					}}
				>
					Log Out
				</button>
			</div>
			<NavLink to="/profile">
				<div className="avatar flex-container">
					<div className="avatar-content text-white font-bold">R</div>
				</div>
			</NavLink>
		</header>
	);
}

export default Header;

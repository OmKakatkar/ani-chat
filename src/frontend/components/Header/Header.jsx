import { faBars, faClover } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { handleLogout } from "../../features/Auth/authSlice";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import { debounce } from "../../utils/util";
import ModalCard from "../ModalCard/ModalCard";

import "./Header.css";
function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store.auth);
	const { allUsers } = useSelector((store) => store.user);
	const [searchUser, setSearchUser] = useState("");
	const { triggerRef, nodeRef, showItem, setShowItem } =
		useDetectClickOutside();
	const [foundUsers, setFoundUsers] = useState([]);
	const location = useLocation();

	useEffect(() => {
		if (searchUser !== "") {
			debounce(() => {
				const searchedUsers = allUsers.filter(
					(currUser) =>
						`${currUser.firstName} ${currUser.lastName}`
							.toLowerCase()
							.includes(searchUser.toLowerCase()) && currUser._id !== user._id
				);
				setFoundUsers(searchedUsers);
			}, 50);
		} else {
			setFoundUsers([]);
		}
	}, [allUsers, searchUser, user._id, setShowItem]);

	useEffect(() => {
		if (location.pathname) {
			setFoundUsers([]);
			setSearchUser("");
			setShowItem(false);
		}
	}, [location.pathname, setShowItem]);

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
				<input
					type="search"
					className="header-searchbar text-white"
					value={searchUser}
					onChange={(e) => setSearchUser(e.target.value)}
					ref={triggerRef}
				/>
				{foundUsers.length > 0 && showItem && (
					<ModalCard position="bottom-center" ref={nodeRef}>
						{foundUsers.map((userData) => (
							<div className="user-info search-user" key={userData._id}>
								<Link to={`/user/${userData._id}`}>
									<div className="avatar">
										<img src={userData.image} alt={userData.username} />
									</div>
									<div>
										<h4 className="text-md text-white">{`${userData.firstName} ${userData.lastName}`}</h4>
									</div>
								</Link>
							</div>
						))}
					</ModalCard>
				)}
			</div>
			<div className="header-profile-wrapper">
				<button
					className="btn text-white"
					onClick={() => {
						dispatch(handleLogout());
						navigate("/");
					}}
				>
					Log Out
				</button>
				<NavLink to="/profile">
					{
						<div className="avatar flex-container">
							{user.image ? (
								<img src={user.image} alt="user" />
							) : (
								<div className="avatar-content text-white font-bold">A</div>
							)}
						</div>
					}
				</NavLink>
			</div>
		</header>
	);
}

export default Header;

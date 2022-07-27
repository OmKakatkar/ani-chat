import { faHome, faBookmark, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openPostModal } from "../../features/Post/postModalSlice";
import "./SideBar.css";

function SideBarLeft() {
	const dispatch = useDispatch();

	return (
		<div className="sidebar sidebar-left">
			<div className="sidebar-spacer"></div>
			<div className="sidebar-content">
				<nav className="sidebar-inner-content">
					<ul className="sidebar-list">
						<li className="sidebar-list-item">
							<NavLink to="/feed/new" className="sidebar-item-link text-white">
								<span className="icon-container">
									<FontAwesomeIcon icon={faHome} className="text-lg" />
								</span>
								<span>Feed</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/bookmarks" className="sidebar-item-link text-white">
								<span className="icon-container">
									<FontAwesomeIcon icon={faBookmark} className="text-lg" />
								</span>
								<span>Bookmarks</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<button
								className="sidebar-item-link text-white bg-blue"
								onClick={() => dispatch(openPostModal({ modalData: null }))}
							>
								<FontAwesomeIcon icon={faAdd} className="text-lg" />

								<span>Create Post</span>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideBarLeft;

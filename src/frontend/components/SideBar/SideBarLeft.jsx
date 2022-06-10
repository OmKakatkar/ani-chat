import {
	faArchive,
	faTrashAlt,
	faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

function SideBarLeft() {
	return (
		<div className="sidebar sidebar-left">
			<div className="sidebar-spacer"></div>
			<div className="sidebar-content">
				<nav className="sidebar-inner-content">
					<ul className="sidebar-list">
						<li className="sidebar-list-item">
							<NavLink to="/feed" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faArchive} className="text-lg" />
								<span>Feed</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/new-post" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faTrashAlt} className="text-lg" />
								<span>Create Post</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/bookmarks" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faStickyNote} className="text-lg" />
								<span>Bookmarks</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideBarLeft;

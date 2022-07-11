import {
	faArchive,
	faTrashAlt,
	faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
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
							<NavLink to="/feed" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faArchive} className="text-lg" />
								<span>Feed</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<button
								className="sidebar-item-link text-white"
								onClick={() => dispatch(openPostModal({ modalData: null }))}
							>
								<FontAwesomeIcon icon={faTrashAlt} className="text-lg" />
								<span>Create Post</span>
							</button>
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

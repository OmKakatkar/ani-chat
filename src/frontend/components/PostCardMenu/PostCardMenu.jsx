import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./PostCardMenu.css";

function PostCardMenu() {
	return (
		<div className="menu-wrapper flex-column">
			<button className="menu-button">
				<FontAwesomeIcon icon={faEdit} />
				<span>Edit</span>
			</button>
			<button className="menu-button">
				<FontAwesomeIcon icon={faTrash} />
				<span>Delete</span>
			</button>
		</div>
	);
}
export default PostCardMenu;

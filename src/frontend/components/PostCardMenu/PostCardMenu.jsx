import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./PostCardMenu.css";
import { handleDeletePost } from "../../features/Post/postSlice";
import { openPostModal } from "../../features/Post/postModalSlice";

function PostCardMenu({ post }) {
	const { token } = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	return (
		<div className="menu-wrapper flex-column">
			<button
				className="menu-button"
				onClick={() => {
					dispatch(openPostModal({ modalData: post }));
				}}
			>
				<FontAwesomeIcon icon={faEdit} />
				<span>Edit</span>
			</button>
			<button
				className="menu-button"
				onClick={() => dispatch(handleDeletePost({ postId: post._id, token }))}
			>
				<FontAwesomeIcon icon={faTrash} />
				<span>Delete</span>
			</button>
		</div>
	);
}
export default PostCardMenu;

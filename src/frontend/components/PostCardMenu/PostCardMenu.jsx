import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./PostCardMenu.css";
import { handleDeletePost } from "../../features/Post/postSlice";
import { openPostModal } from "../../features/Post/postModalSlice";
import { useNavigate } from "react-router-dom";

function PostCardMenu({ post }) {
	const { token } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="menu-wrapper flex-column">
			<button
				className="menu-button"
				onClick={() => {
					dispatch(openPostModal({ modalData: post }));
					navigate("/new-post");
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

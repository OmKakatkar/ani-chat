import { faMultiply, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { error } from "../../constants/toast-constants";
import {
	handleAddComment,
	handleEditComment,
} from "../../features/Post/postSlice";
import { notify } from "../../utils/notify";
import "./CommentBox.css";

function CommentBox({ postId, commentData, isEditing, setIsEditing }) {
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.auth);
	const [comment, setComment] = useState(commentData?.text || "");

	const submitComment = (e) => {
		e.preventDefault();
		if (comment !== "") {
			if (isEditing) {
				dispatch(
					handleEditComment({
						postId,
						commentData: { ...commentData, text: comment },
						token,
					})
				);
				setComment("");
				setIsEditing(false);
			} else {
				dispatch(
					handleAddComment({ postId, commentData: { text: comment }, token })
				);
				setComment("");
			}
		}
		notify(error, "Comment cannot be empty");
	};

	return (
		<form className="card post-card comment-box flex" onSubmit={submitComment}>
			<div className="input-container ">
				<input
					type="text"
					className="input comment-input text-white"
					placeholder="Add Comment..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
			</div>
			<button className="btn bg-blue">
				<FontAwesomeIcon icon={faReply} />
			</button>
			{isEditing && (
				<button className="btn bg-red" onClick={() => setIsEditing(false)}>
					<FontAwesomeIcon icon={faMultiply} />
				</button>
			)}
		</form>
	);
}
export default CommentBox;

import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddComment } from "../../features/Post/postSlice";
import "./CommentBox.css";

function CommentBox({ postId }) {
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.auth);
	const [comment, setComment] = useState("");

	const submitComment = (e) => {
		e.preventDefault();
		dispatch(
			handleAddComment({ postId, commentData: { text: comment }, token })
		);
		setComment("");
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
		</form>
	);
}
export default CommentBox;

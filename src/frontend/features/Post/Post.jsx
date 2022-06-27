import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleCreatePost } from "./postSlice";
import { useState } from "react";

function Post() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.auth);
	const [postData, setPostData] = useState({
		content: "",
	});

	const handleChange = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

	const handlePostSubmit = async (e) => {
		e.preventDefault();
		await dispatch(handleCreatePost({ postData, token }));
		navigate("/feed");
	};

	return (
		<form className="flex flex-column" onSubmit={handlePostSubmit}>
			<textarea
				name="content"
				cols="30"
				rows="10"
				placeholder="Start Typing..."
				onChange={handleChange}
				value={postData.content}
			/>
			<button className="btn bg-blue" type="submit">
				Post
			</button>
		</form>
	);
}
export default Post;

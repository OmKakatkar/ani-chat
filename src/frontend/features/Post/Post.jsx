import { useDispatch, useSelector } from "react-redux";
import { handleCreatePost, handleEditPost } from "./postSlice";
import { useState, useEffect } from "react";
import { closePostModal } from "./postModalSlice";
import "./Post.css";
import ModalCard from "../../components/ModalCard/ModalCard";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";

function Post() {
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.auth);
	const { showModal, modalData } = useSelector((store) => store.postModal);

	const [postData, setPostData] = useState({
		content: "",
	});

	useEffect(() => {
		if (modalData !== null) {
			setPostData({ content: modalData.content });
		}
	}, [modalData]);

	const reset = () => {
		setPostData({ content: "" });
		dispatch(closePostModal());
	};
	const { nodeRef } = useDetectClickOutside(false, reset);

	const handleChange = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

	const handlePostSubmit = (e) => {
		e.preventDefault();
		if (modalData === null) {
			dispatch(handleCreatePost({ postData, token }));
		} else {
			dispatch(
				handleEditPost({ postData: { ...modalData, ...postData }, token })
			);
		}
		reset();
	};

	return (
		<>
			{showModal && (
				<div className={showModal ? "page-overlay" : ""}>
					<ModalCard position="center" ref={nodeRef}>
						<form
							className="flex flex-column post-form"
							onSubmit={handlePostSubmit}
						>
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
					</ModalCard>
				</div>
			)}
		</>
	);
}
export default Post;

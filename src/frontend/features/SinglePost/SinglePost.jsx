import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/CommentBox/CommentBox";
import PostCard from "../../components/PostCard/PostCard";
import { handleDeleteComment, handleGetAllPosts } from "../Post/postSlice";
import "./SinglePost.css";

function SinglePost() {
	const { allPosts } = useSelector((store) => store.post);
	const { user, token } = useSelector((store) => store.auth);
	const { postId } = useParams();
	const dispatch = useDispatch();
	const currentPost = allPosts.filter(({ _id }) => postId === _id)[0];
	const [currentId, setCurrentId] = useState("");
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (!allPosts.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allPosts.length, dispatch]);

	return (
		<>
			<PostCard post={currentPost} />
			<CommentBox postId={postId} />
			<h2 className="text-xhuge text-white text-center">Comments</h2>
			<section className="card post-card">
				{currentPost &&
					currentPost.comments.map((comment) => (
						<article className="post-card comment-card" key={comment._id}>
							<div className="card-body">
								<div className="user-info">
									<div className="avatar">
										<img src={comment.userImage} alt={comment.username} />
									</div>
									<div>
										<h4 className="text-md text-white">{comment.username}</h4>
										<small className="text-sm text-gray">
											{comment.createdAt}
										</small>
									</div>
								</div>
								{(isEditing && currentId === comment._id) ? (
									<CommentBox
										postId={postId}
										commentData={comment}
										isEditing={isEditing}
										setIsEditing={setIsEditing}
									/>
								) : (
									<p className="text-white">{comment.text}</p>
								)}
							</div>
							{!isEditing 
								 &&
								user.username === comment.username && (
									<div className="comment-card-buttons">
										<button
											onClick={() => {
												dispatch(
													handleDeleteComment({
														postId,
														commentId: comment._id,
														token,
													})
												);
											}}
										>
											<FontAwesomeIcon icon={faTrash} className="icon" />
										</button>
										<button
											onClick={() => {
												setCurrentId(comment._id);
												setIsEditing(true);
											}}
										>
											<FontAwesomeIcon icon={faPencil} className="icon" />
										</button>
									</div>
								)}
						</article>
					))}
			</section>
		</>
	);
}
export default SinglePost;

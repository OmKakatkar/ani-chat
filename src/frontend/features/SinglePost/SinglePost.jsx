import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/CommentBox/CommentBox";
import PostCard from "../../components/PostCard/PostCard";
import { handleDeleteComment } from "../Post/postSlice";
import "./SinglePost.css";

function SinglePost() {
	const { allPosts } = useSelector((store) => store.post);
	const { user, token } = useSelector((store) => store.auth);
	const { postId } = useParams();
	const dispatch = useDispatch();
	const currentPost = allPosts.filter(({ _id }) => postId === _id)[0];

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
								<p className="text-white">{comment.text}</p>
							</div>
							{user.username === comment.username && (
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
									<button onClick={() => {}}>
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

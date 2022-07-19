import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ModalCard from "../../components/ModalCard/ModalCard";
import PostCard from "../../components/PostCard/PostCard";
import PostCardMenu from "../../components/PostCardMenu/PostCardMenu";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";

function SinglePost() {
	const { allPosts } = useSelector((store) => store.post);
	const { user } = useSelector((store) => store.auth);
	const { postId } = useParams();
	const { triggerRef, nodeRef, showItem } = useDetectClickOutside();
	const currentPost = allPosts.filter(({ _id }) => postId === _id)[0];

	currentPost.comments.map((comment) => {
		console.log(comment);
		return comment;
	});

	return (
		<>
			<PostCard post={currentPost} />
			<h2 className="text-xhuge text-white text-center">Comments</h2>
			<section className="card post-card">
				{currentPost.comments.map((comment) => (
					<article>
						{currentPost.username === user.username && (
							<button ref={triggerRef}>
								<FontAwesomeIcon
									icon={faEllipsisVertical}
									className="icon card-menu"
								/>
							</button>
						)}
						<div className="card-body">
							<div className="user-info">
								<div className="avatar">
									<img src={currentPost.userImage} alt={currentPost.username} />
								</div>
								<div>
									<h4 className="text-md text-white">{currentPost.username}</h4>
									<small className="text-sm text-gray">
										{currentPost.createdAt}
									</small>
								</div>
							</div>
							<p className="text-white">{currentPost.content}</p>
						</div>
						{showItem && (
							<ModalCard ref={nodeRef} position="top-right">
								<PostCardMenu post={currentPost} />
							</ModalCard>
						)}
					</article>
				))}
			</section>
		</>
	);
}
export default SinglePost;

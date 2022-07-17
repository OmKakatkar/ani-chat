import {
	faBookmark,
	faComment,
	faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
	faShareNodes,
	faEllipsisVertical,
	faBookmark as faSolidBookmark,
	faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../constants/toast-constants";
import {
	handleAddBookmark,
	handleRemoveBookmark,
} from "../../features/Auth/authSlice";
import {
	handleLikePost,
	handleUnlikePost,
} from "../../features/Post/postSlice";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import { notify } from "../../utils/notify";
import { checkItemInArray } from "../../utils/util";
import ModalCard from "../ModalCard/ModalCard";
import PostCardMenu from "../PostCardMenu/PostCardMenu";
import "./PostCard.css";

function PostCard({ post }) {
	const dispatch = useDispatch();
	const { user, token } = useSelector((store) => store.auth);
	const { triggerRef, nodeRef, showItem } = useDetectClickOutside();
	const isBookMark = checkItemInArray(user.bookmarks, post);
	const isLiked = checkItemInArray(post.likes.likedBy, user);

	return (
		<article className="card post-card">
			{post.username === user.username && (
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
						<img src={post.userImage} alt={post.username} />
					</div>
					<div>
						<h4 className="text-md text-white">{post.username}</h4>
						<small className="text-sm text-gray">{post.createdAt}</small>
					</div>
				</div>
				<p className="text-white">{post.content}</p>
				<div className="card-buttons">
					<span className="button-wrapper">
						{isLiked ? (
							<button
								onClick={() =>
									dispatch(handleUnlikePost({ postId: post._id, token }))
								}
							>
								<FontAwesomeIcon
									icon={faSolidHeart}
									className="icon icon-active"
								/>
							</button>
						) : (
							<button
								onClick={() =>
									dispatch(handleLikePost({ postId: post._id, token }))
								}
							>
								<FontAwesomeIcon icon={faHeart} className="icon" />
							</button>
						)}
						<small className="text-white">{post.likes.likeCount}</small>
					</span>
					{isBookMark ? (
						<button
							onClick={() =>
								dispatch(handleRemoveBookmark({ postId: post._id, token }))
							}
						>
							<FontAwesomeIcon
								icon={faSolidBookmark}
								className="icon icon-active"
							/>
						</button>
					) : (
						<button
							onClick={() =>
								dispatch(handleAddBookmark({ postId: post._id, token }))
							}
						>
							<FontAwesomeIcon icon={faBookmark} className="icon" />
						</button>
					)}
					<button>
						<FontAwesomeIcon icon={faComment} className="icon" />
					</button>
					<button
						onClick={() => {
							navigator.clipboard.writeText(
								`https://ani-chat.netlify.app/post/${post._id}`
							);
							notify(success, 'Link Copied!')
						}}
					>
						<FontAwesomeIcon icon={faShareNodes} className="icon" />
					</button>
				</div>
			</div>
			{showItem && (
				<ModalCard ref={nodeRef} position="top-right">
					<PostCardMenu post={post} />
				</ModalCard>
			)}
		</article>
	);
}
export default PostCard;

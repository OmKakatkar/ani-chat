import {
	faBookmark,
	faComment,
	faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
	faShareNodes,
	faEllipsisVertical,
	faBookmark as faSolidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
	handleAddBookmark,
	handleRemoveBookmark,
} from "../../features/Auth/authSlice";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import { checkItemInArray } from "../../utils/util";
import ModalCard from "../ModalCard/ModalCard";
import PostCardMenu from "../PostCardMenu/PostCardMenu";
import "./PostCard.css";

function PostCard({ post }) {
	const dispatch = useDispatch();
	const { user, token } = useSelector((store) => store.auth);
	const { triggerRef, nodeRef, showItem } = useDetectClickOutside();
	const isBookMark = checkItemInArray(user.bookmarks, post);

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
					<button>
						<FontAwesomeIcon icon={faHeart} className="icon" />
					</button>
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
					<button>
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

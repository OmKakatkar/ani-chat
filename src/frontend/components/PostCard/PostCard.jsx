import {
	faBookmark,
	faComment,
	faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostCard.css";

function PostCard({ post }) {
	return (
		<article className="card post-card">
			<button>
				<FontAwesomeIcon icon={faEllipsisVertical} className="icon card-menu" />
			</button>
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
					<button>
						<FontAwesomeIcon icon={faBookmark} className="icon" />
					</button>
					<button>
						<FontAwesomeIcon icon={faComment} className="icon" />
					</button>
					<button>
						<FontAwesomeIcon icon={faShareNodes} className="icon" />
					</button>
				</div>
			</div>
		</article>
	);
}
export default PostCard;

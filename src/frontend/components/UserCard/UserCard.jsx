import { Link } from "react-router-dom";
import "./UserCard.css";
function UserCard({ children, userData }) {
	return (
		<article className="user-card">
			<Link to={`/user/${userData._id}`}>
				<div className="avatar lg">
					<img src={userData?.image} alt={userData?.firstName} />
				</div>
				<p className="text-white text-center">
					{userData?.firstName} {userData?.lastName}
				</p>
			</Link>
			{children}
		</article>
	);
}
export default UserCard;

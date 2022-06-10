import "./UserCard.css";
function UserCard({ children, userData }) {
	return (
		<article className="user-card">
			<div className="avatar lg">
				<img src={userData?.image} alt={userData?.firstName} />
			</div>
			<p>
				{userData?.firstName} {userData?.lastName}
			</p>
			{children}
		</article>
	);
}
export default UserCard;

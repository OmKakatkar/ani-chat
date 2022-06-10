import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalCard from "../../components/ModalCard/ModalCard";
import ProfileUpdate from "../../components/ProfileUpdate/ProfileUpdate";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import "./Profile.css";

function Profile() {
	const { user } = useSelector((store) => store.auth);
	const { triggerRef, nodeRef, showItem, setShowItem } =
		useDetectClickOutside();

	return (
		<div className="text-white">
			<button className="profile-edit" ref={triggerRef}>
				Edit
			</button>
			<div className="image circular">
				<img src={user.image} alt="Profile" />
			</div>
			<div>
				<div className="flex flex-column text-center">
					<span className="text-xhuge">
						{user?.firstName} {user?.lastName}
					</span>
				</div>
				<div className="flex flex-column text-center">
					<span className="text-xlg">{user?.followers?.length}</span>
					<span className="text-xlg">Followers</span>
				</div>
			</div>
			<div className="text-center">
				<span>Site :</span>
				<Link to={user.site} className="text-green">
					{user.site}
				</Link>
			</div>
			<div className="text-center">
				<span>Bio :</span>
				<span>{user.bio}</span>
			</div>
			{showItem && (
				<ModalCard ref={nodeRef}>
					<ProfileUpdate setShowItem={setShowItem} />
				</ModalCard>
			)}
		</div>
	);
}
export default Profile;

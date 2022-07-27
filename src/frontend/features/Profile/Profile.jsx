import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ModalCard from "../../components/ModalCard/ModalCard";
import ProfileUpdate from "../../components/ProfileUpdate/ProfileUpdate";
import UserPosts from "../../components/UserPosts/UserPosts";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import { handleGetAllPosts } from "../Post/postSlice";
import "./Profile.css";
import { handleGetAllUsers } from "./userSlice";

function Profile() {
	const { userId } = useParams();
	const { allUsers } = useSelector((store) => store.user);
	const { user: currentUser } = useSelector((store) => store.auth);
	const { allPosts } = useSelector((store) => store.post);
	const { triggerRef, nodeRef, showItem, setShowItem } =
		useDetectClickOutside();
	const dispatch = useDispatch();

	const user = userId
		? allUsers.filter(({ _id }) => _id === userId)[0]
		: currentUser;

	useEffect(() => {
		if (!allUsers.length) {
			dispatch(handleGetAllUsers());
		}
	}, [allUsers.length, dispatch]);

	useEffect(() => {
		if (!allPosts.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allPosts.length, dispatch]);

	return (
		<>
			{user && (
				<>
					<div className="text-white">
						{!userId && (
							<button className="profile-edit" ref={triggerRef}>
								Edit
							</button>
						)}
						<div className="image circular">
							<img
								src={user.image}
								alt={`${user.firstName} ${user.lastName}'s Profile`}
							/>
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
							<a
								href={user.site}
								rel="noreferrer"
								target="_blank"
								className="text-green"
							>
								{user.site}
							</a>
						</div>
						<div className="text-center">
							<span>Bio :</span>
							<span>{user.bio}</span>
						</div>
						{showItem && (
							<ModalCard ref={nodeRef} position="profile-center">
								<ProfileUpdate setShowItem={setShowItem} />
							</ModalCard>
						)}
					</div>
					<UserPosts userName={user.username} />
				</>
			)}
		</>
	);
}
export default Profile;

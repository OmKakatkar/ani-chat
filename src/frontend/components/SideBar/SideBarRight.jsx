import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import UserCard from "../UserCard/UserCard";
import {
	handleGetAllUsers,
	handleFollowUser,
	handleUnFollowUser,
} from "../../features/Profile/userSlice";
import { handleProfileUpdate } from "../../features/Auth/authSlice";
import "./SideBar.css";

function SideBarRight() {
	const { allUsers } = useSelector((store) => store.user);
	const { user, token } = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleGetAllUsers());
	}, [dispatch]);

	const usersNotFollowing = allUsers.filter(
		({ _id }) =>
			!user.following.map((currUser) => currUser._id).includes(_id) &&
			_id !== user._id
	);

	return (
		<div className="sidebar sidebar-right">
			<div className="sidebar-spacer half"></div>
			<div className="sidebar-content">
				<nav className="sidebar-inner-content pad-btm-2r">
					<h2 className="text-center">You might know</h2>
					<div className="sidebar-spacer half"></div>
					<ul className="sidebar-list text-center">
						{usersNotFollowing.map((currUser) => (
							<UserCard key={currUser._id} userData={currUser}>
								<button
									className="user-follow"
									onClick={() => {
										dispatch(
											handleFollowUser({
												id: currUser._id,
												token,
												dispatch,
												handleProfileUpdate,
											})
										);
									}}
								>
									Follow
								</button>
							</UserCard>
						))}
					</ul>
					<div className="sidebar-spacer half"></div>
					{user.following.length > 0 && (
						<h3 className="text-center">Following</h3>
					)}
					<div className="sidebar-spacer half"></div>
					{user.following.length > 0 &&
						user.following.map((currUser) => (
							<UserCard key={currUser._id} userData={currUser}>
								<button
									className="user-follow"
									onClick={() => {
										dispatch(
											handleUnFollowUser({
												id: currUser._id,
												token,
												dispatch,
												handleProfileUpdate,
											})
										);
									}}
								>
									UnFollow
								</button>
							</UserCard>
						))}
				</nav>
			</div>
			<div className="sidebar-spacer"></div>
		</div>
	);
}

export default SideBarRight;

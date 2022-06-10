import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { handleProfileUpdate } from "../../features/Auth/authSlice";
import "./ProfileUpdate.css";

function ProfileUpdate({ setShowItem }) {
	const dispatch = useDispatch();
	const { user, token } = useSelector((store) => store.auth);
	const [formData, setFormData] = useState({ ...user });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleProfileUpdate({ userData: { ...formData }, token }));
		setShowItem((showItem) => !showItem);
	};

	return (
		<form className="profile-update-form" onSubmit={handleSubmit}>
			<Input
				type="text"
				label="First Name"
				name="firstName"
				value={formData.firstName}
				handleChange={handleChange}
				classNames="text-white"
			/>
			<Input
				type="text"
				label="Last Name"
				name="lastName"
				value={formData.lastName}
				handleChange={handleChange}
				classNames="text-white"
			/>
			<Input
				type="text"
				label="Image"
				name="image"
				value={formData.image}
				handleChange={handleChange}
				classNames="text-white"
			/>
			<Input
				type="text"
				label="Bio"
				name="bio"
				value={formData.bio}
				handleChange={handleChange}
				classNames="text-white"
			/>
			<Input
				type="text"
				label="Site"
				name="site"
				value={formData.site}
				handleChange={handleChange}
				classNames="text-white"
			/>
			<button type="submit" className="btn bg-blue rounded">
				Update
			</button>
		</form>
	);
}
export default ProfileUpdate;

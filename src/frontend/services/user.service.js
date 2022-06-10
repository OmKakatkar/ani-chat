import axios from "axios";
import { API_FOLLOW, API_UNFOLLOW, API_USERS } from "../constants/api-constant";

/**
 * Login the user if username and password are correct
 * @return user
 */
export const getAllUsers = async () => {
	try {
		const { data } = await axios.get(API_USERS);
		return data.users;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Login the user if username and password are correct
 * @return user
 */
export const addFollowUser = async ({ id, token }) => {
	try {
		const { data } = await axios.post(
			`${API_FOLLOW}/${id}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Login the user if username and password are correct
 * @return user
 */
export const addUnFollowUser = async ({ id, token }) => {
	try {
		const data = await axios.post(
			`${API_UNFOLLOW}/${id}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		return data;
	} catch (err) {
		console.error(err);
	}
};

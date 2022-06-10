import axios from "axios";
import { API_LOGIN, API_SIGNUP, API_USER_EDIT } from "../constants/api-constant";
import { notify } from "../utils/notify";
import { error, success } from "../constants/toast-constants";

/**
 * Login the user if username and password are correct
 * @param {string} username
 * @param {string} password
 * @return user
 */
export const login = async ({ username, password }) => {
	try {
		const { data } = await axios.post(API_LOGIN, {
			username,
			password,
		});
		notify(success, "Login Successful!");
		return data;
	} catch (err) {
		if (err.response.status === 404 || err.response.status === 401) {
			notify(error, "Wrong username or password");
		} else {
			console.error(err.response.status);
			notify(error, "Internal Error");
		}
		return {};
	}
};

/**
 * SignUp the user with given credentials
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} username
 * @param {string} password
 * @return user
 */
export const signup = async ({ firstName, lastName, username, password }) => {
	try {
		const { data } = await axios.post(API_SIGNUP, {
			firstName,
			lastName,
			username,
			password,
		});
		notify(success, "SignUp Successful!");
		return data;
	} catch (err) {
		if (err.response.status === 422) {
			notify(error, "User Already Exists, check your credentials");
		} else {
			console.error(err.response.status);
			notify(error, "Internal Error");
		}
		return {};
	}
};

/**
 * Login the user if username and password are correct
 * @return user
 */
 export const updateProfile = async ({ userData, token }) => {
	try {
		const { data } = await axios.post(
			API_USER_EDIT,
			{
				userData,
			},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Profile Updated");
		return data;
	} catch (err) {
		console.error(err);
	}
};

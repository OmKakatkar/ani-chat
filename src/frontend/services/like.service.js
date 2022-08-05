import axios from "axios";
import { API_LIKE, API_UNLIKE } from "../constants/api-constant";
import { success } from "../constants/toast-constants";
import { notify } from "../utils/notify";

/**
 * Add Like
 * @return allPosts
 */
export const addLike = async ({ postId, token }) => {
	try {
		const { data } = await axios.post(
			`${API_LIKE}/${postId}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Post liked");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Remove like
 * @return allPosts
 */
export const removeLike = async ({ postId, token }) => {
	try {
		const { data } = await axios.post(
			`${API_UNLIKE}/${postId}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Post unliked");
		return data;
	} catch (err) {
		console.error(err);
	}
};

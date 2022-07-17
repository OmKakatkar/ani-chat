import axios from "axios";
import { API_LIKE, API_UNLIKE } from "../constants/api-constant";

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
		return data;
	} catch (err) {
		console.error(err);
	}
};

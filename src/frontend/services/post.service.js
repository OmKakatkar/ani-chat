import axios from "axios";
import { API_POST, API_POST_EDIT } from "../constants/api-constant";
import { notify } from "../utils/notify";
import { success } from "../constants/toast-constants";

/**
 * Create a new post
 * @return allPosts
 */
export const createPost = async ({ postData, token }) => {
	try {
		const { data } = await axios.post(
			API_POST,
			{ postData },
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Post Created");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Get all posts
 * @return allPosts
 */
export const getAllPosts = async () => {
	try {
		const { data } = await axios.get(API_POST);
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Delete post
 * @return allPosts
 */
export const deletePost = async ({ postId, token }) => {
	try {
		const { data } = await axios.delete(`${API_POST}/${postId}`, {
			headers: {
				authorization: token,
			},
		});
		notify(success, "Post Deleted");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Edit post
 * @return allPosts
 */
export const editPost = async ({ postData, token }) => {
	try {
		const { data } = await axios.post(
			`${API_POST_EDIT}/${postData._id}`,
			{ postData },
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Post Edited");
		return data;
	} catch (err) {
		console.error(err);
	}
};

import axios from "axios";
import { API_BOOKMARK, API_REMOVE_BOOKMARK } from "../constants/api-constant";
import { success } from "../constants/toast-constants";
import { notify } from "../utils/notify";

/**
 * Add to bookmark
 * @return allBookmarks
 */
export const addBookmark = async ({ postId, token }) => {
	try {
		const { data } = await axios.post(
			`${API_BOOKMARK}/${postId}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Post bookmarked");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Remove bookmark
 * @return allBookmarks
 */
export const removeBookmark = async ({ postId, token }) => {
	try {
		const { data } = await axios.post(
			`${API_REMOVE_BOOKMARK}/${postId}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Removed from Bookmarks");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Get all bookmarks
 * @return allBookmarks
 */
export const getAllBookmarks = async ({ token }) => {
	try {
		const { data } = await axios.get(API_BOOKMARK, {
			headers: {
				authorization: token,
			},
		});
		return data;
	} catch (err) {
		console.error(err);
	}
};

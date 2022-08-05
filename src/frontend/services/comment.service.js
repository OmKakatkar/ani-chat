import axios from "axios";
import {
	API_COMMENT_ADD,
	API_COMMENT_DELETE,
	API_COMMENT_EDIT,
} from "../constants/api-constant";
import { success } from "../constants/toast-constants";
import { notify } from "../utils/notify";

/**
 * Post a comment
 * @return comments for a post
 */
export const addComment = async ({ postId, commentData, token }) => {
	try {
		const { data } = await axios.post(
			`${API_COMMENT_ADD}/${postId}`,
			{ commentData },
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Comment Added");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Delete a comment
 * @return comments for a post
 */
export const deleteComment = async ({ postId, commentId, token }) => {
	try {
		const { data } = await axios.post(
			`${API_COMMENT_DELETE}/${postId}/${commentId}`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Comment Deleted");
		return data;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Edit a comment
 * @return comments for a post
 */
export const editComment = async ({ postId, commentData, token }) => {
	try {
		const { data } = await axios.post(
			`${API_COMMENT_EDIT}/${postId}/${commentData._id}`,
			{ commentData },
			{
				headers: {
					authorization: token,
				},
			}
		);
		notify(success, "Comment Updated");
		return data;
	} catch (err) {
		console.error(err);
	}
};

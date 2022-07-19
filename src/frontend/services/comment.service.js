import axios from "axios";
import { API_COMMENT_ADD } from "../constants/api-constant";

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
		return data;
	} catch (err) {
		console.error(err);
	}
};

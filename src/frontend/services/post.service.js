import axios from "axios";
import { API_POST } from "../constants/api-constant";

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
		console.log(data.posts);
		return data;
	} catch (err) {
		console.error(err);
	}
};

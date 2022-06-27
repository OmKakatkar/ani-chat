import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost } from "../../services/post.service";

const initialState = {
	allPosts: [],
	userPosts: [],
};

export const handleCreatePost = createAsyncThunk(
	"users/handleCreatePost",
	async ({ postData, token }) => {
		try {
			const { posts } = await createPost({ postData, token });
			return posts;
		} catch (err) {
			console.error(err);
		}
	}
);

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(handleCreatePost.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});
	},
});

export default postSlice.reducer;

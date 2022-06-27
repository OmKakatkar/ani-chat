import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, getAllPosts } from "../../services/post.service";

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

export const handleGetAllPosts = createAsyncThunk(
	"users/handleGetAllPosts",
	async () => {
		try {
			const { posts } = await getAllPosts();
			console.log(posts);
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
		builder.addCase(handleGetAllPosts.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});
	},
});

export default postSlice.reducer;

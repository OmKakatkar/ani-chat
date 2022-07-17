import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addLike, removeLike } from "../../services/like.service";
import {
	createPost,
	deletePost,
	editPost,
	getAllPosts,
} from "../../services/post.service";

const initialState = {
	allPosts: [],
	userPosts: [],
};

// Post CRUD
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
			return posts;
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleDeletePost = createAsyncThunk(
	"users/handleDeletePost",
	async ({ postId, token }) => {
		try {
			const { posts } = await deletePost({ postId, token });
			return posts;
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleEditPost = createAsyncThunk(
	"users/handleEditPost",
	async ({ postData, token }) => {
		try {
			const { posts } = await editPost({ postData, token });
			return posts;
		} catch (err) {
			console.error(err);
		}
	}
);

// Likes
export const handleLikePost = createAsyncThunk(
	"users/handleLikePost",
	async ({ postId, token }) => {
		try {
			const { posts } = await addLike({ postId, token });
			return posts;
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleUnlikePost = createAsyncThunk(
	"users/handleUnlikePost",
	async ({ postId, token }) => {
		try {
			const { posts } = await removeLike({ postId, token });
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

		builder.addCase(handleDeletePost.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});

		builder.addCase(handleEditPost.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});

		builder.addCase(handleLikePost.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});

		builder.addCase(handleUnlikePost.fulfilled, (state, action) => {
			state.allPosts = action.payload;
		});
	},
});

export default postSlice.reducer;

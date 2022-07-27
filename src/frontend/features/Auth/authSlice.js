import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup, updateProfile } from "../../services/auth.service";
import {
	addBookmark,
	getAllBookmarks,
	removeBookmark,
} from "../../services/bookmark.service";

const currentUser = "ANICHAT_USER";
const currentToken = "ANICHAT_TOKEN";
const remeberStatus = "ANICHAT_isLoginRemember";
const initialState = {
	user: JSON.parse(localStorage.getItem(currentUser)) || {},
	token: localStorage.getItem(currentToken) || "",
	isLoginRemember: localStorage.getItem(remeberStatus) || false,
};

export const handleLogin = createAsyncThunk(
	"auth/handleLogin",
	async ({ username, password, isLoginRemember }) => {
		try {
			const { foundUser: user, encodedToken: token } = await login({
				username,
				password,
			});
			return { user, token, isLoginRemember };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleSignUp = createAsyncThunk(
	"auth/handleSignUp",
	async ({ firstName, lastName, username, password }) => {
		try {
			const { createdUser: user, encodedToken: token } = await signup({
				firstName,
				lastName,
				username,
				password,
			});
			return { user, token, isLoginRemember: true };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleProfileUpdate = createAsyncThunk(
	"auth/handleProfileUpdate",
	async ({ userData, token }) => {
		try {
			const { user } = await updateProfile({ userData, token });
			return { user };
		} catch (err) {
			console.error(err);
		}
	}
);

// Bookmarks
export const handleAddBookmark = createAsyncThunk(
	"users/handleAddBookmark",
	async ({ postId, token }) => {
		try {
			const { bookmarks } = await addBookmark({ postId, token });
			return { bookmarks };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleRemoveBookmark = createAsyncThunk(
	"users/handleRemoveBookmark",
	async ({ postId, token }) => {
		try {
			const { bookmarks } = await removeBookmark({ postId, token });
			return { bookmarks };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleGetAllBookmarks = createAsyncThunk(
	"users/handleGetAllBookmarks",
	async ({ token }) => {
		try {
			const { bookmarks } = await getAllBookmarks({ token });
			return { bookmarks };
		} catch (err) {
			console.error(err);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		handleLogout: (state) => {
			localStorage.removeItem(currentUser);
			localStorage.removeItem(currentToken);
			localStorage.removeItem(remeberStatus);
			state.user = {};
			state.token = "";
			state.remeberStatus = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(handleLogin.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoginRemember = action.payload.isLoginRemember;
			delete action.payload.user.password;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
				localStorage.setItem(currentToken, action.payload.token);
			}
		});

		builder.addCase(handleSignUp.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoginRemember = action.payload.isLoginRemember;
			delete action.payload.user.password;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
				localStorage.setItem(currentToken, action.payload.token);
			}
		});

		builder.addCase(handleProfileUpdate.fulfilled, (state, action) => {
			state.user = action.payload.user;
			delete action.payload.user.password;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
			}
		});

		builder.addCase(handleAddBookmark.fulfilled, (state, action) => {
			state.user.bookmarks = action.payload.bookmarks;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
			}
		});

		builder.addCase(handleRemoveBookmark.fulfilled, (state, action) => {
			state.user.bookmarks = action.payload.bookmarks;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
			}
		});

		builder.addCase(handleGetAllBookmarks.fulfilled, (state, action) => {
			state.user.bookmarks = action.payload.bookmarks;
			if (action.payload.isLoginRemember) {
				localStorage.setItem(
					currentUser,
					JSON.stringify({
						...action.payload.user,
						followers: [],
						following: [],
					})
				);
			}
		});
	},
});

export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;

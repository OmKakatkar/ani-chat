import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup, updateProfile } from "../../services/auth.service";
import { addBookmark, removeBookmark } from "../../services/bookmark.service";

const currentUser = "ANICHAT_USER";
const currentToken = "ANICHAT_TOKEN";
const initialState = {
	user: JSON.parse(localStorage.getItem(currentUser)) || {},
	token: localStorage.getItem(currentToken) || "",
};

export const handleLogin = createAsyncThunk(
	"auth/handleLogin",
	async ({ username, password }) => {
		try {
			const { foundUser: user, encodedToken: token } = await login({
				username,
				password,
			});
			return { user, token };
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
			return { user, token };
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

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		handleLogout: (state) => {
			localStorage.removeItem(currentUser);
			localStorage.removeItem(currentToken);
			state.user = {};
			state.token = "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(handleLogin.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			delete action.payload.user.password;
			localStorage.setItem(
				currentUser,
				JSON.stringify({
					...action.payload.user,
					followers: [],
					following: [],
				})
			);
			localStorage.setItem(currentToken, action.payload.token);
		});

		builder.addCase(handleSignUp.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			delete action.payload.user.password;
			localStorage.setItem(
				currentUser,
				JSON.stringify({
					...action.payload.user,
					followers: [],
					following: [],
				})
			);
			localStorage.setItem(currentToken, action.payload.token);
		});

		builder.addCase(handleProfileUpdate.fulfilled, (state, action) => {
			state.user = action.payload.user;
			delete action.payload.user.password;
			localStorage.setItem(
				currentUser,
				JSON.stringify({
					...action.payload.user,
					followers: [],
					following: [],
				})
			);
		});

		builder.addCase(handleAddBookmark.fulfilled, (state, action) => {
			state.user.bookmarks = action.payload.bookmarks;
			localStorage.setItem(
				currentUser,
				JSON.stringify({
					...action.payload.user,
					followers: [],
					following: [],
				})
			);
		});

		builder.addCase(handleRemoveBookmark.fulfilled, (state, action) => {
			state.user.bookmarks = action.payload.bookmarks;
			localStorage.setItem(
				currentUser,
				JSON.stringify({
					...action.payload.user,
					followers: [],
					following: [],
				})
			);
		});
	},
});

export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;

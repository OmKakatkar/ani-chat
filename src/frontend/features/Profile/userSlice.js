import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	addFollowUser,
	addUnFollowUser,
	getAllUsers,
} from "../../services/user.service";
import { updateCurrentUser } from "../Auth/authSlice";

const initialState = {
	allUsers: [],
};

export const handleGetAllUsers = createAsyncThunk(
	"users/handleGetAllUsers",
	async () => {
		try {
			const users = await getAllUsers();
			return users;
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleFollowUser = createAsyncThunk(
	"users/handleFollowUser",
	async ({ id, token, dispatch }) => {
		try {
			const { user, followUser } = await addFollowUser({ id, token });
			dispatch(updateCurrentUser(user));
			return { followUser };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleUnFollowUser = createAsyncThunk(
	"users/handleUnFollowUser",
	async ({ id, token, dispatch }) => {
		try {
			const { user, followUser } = await addUnFollowUser({ id, token });
			dispatch(updateCurrentUser(user));
			return { followUser };
		} catch (err) {
			console.error(err);
		}
	}
);

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(handleGetAllUsers.fulfilled, (state, action) => {
			state.allUsers = action.payload;
		});

		builder.addCase(handleFollowUser.fulfilled, (state, action) => {
			state.allUsers = state.allUsers.map((user) =>
				user._id === action.payload.followUser._id
					? { ...action.payload.followUser }
					: user
			);
		});

		builder.addCase(handleUnFollowUser.fulfilled, (state, action) => {
			state.allUsers = state.allUsers.map((user) =>
				user._id === action.payload.followUser._id
					? { ...action.payload.followUser }
					: user
			);
		});
	},
});

export default userSlice.reducer;

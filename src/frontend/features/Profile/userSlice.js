import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	addFollowUser,
	addUnFollowUser,
	getAllUsers,
} from "../../services/user.service";

const initialState = {
	allUsers: [],
	temp: {},
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
	async ({ id, token, dispatch, handleProfileUpdate }) => {
		try {
			const { user, followUser } = await addFollowUser({ id, token });
			dispatch(handleProfileUpdate({ user, token }));
			return { followUser };
		} catch (err) {
			console.error(err);
		}
	}
);

export const handleUnFollowUser = createAsyncThunk(
	"users/handleUnFollowUser",
	async ({ id, token, dispatch, handleProfileUpdate }) => {
		try {
			const { user, followUser } = await addUnFollowUser({ id, token });
			dispatch(handleProfileUpdate({ user, token }));
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

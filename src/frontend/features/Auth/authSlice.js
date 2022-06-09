import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/auth.service";

const currentUser = "ANICHAT_USER";
const currentToken = "ANICHAT_TOKEN";
const initialState = {
	user: JSON.parse(localStorage.getItem("ANICHAT_USER")) || {},
	token: JSON.parse(localStorage.getItem("ANICHAT_USER")) || null,
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

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(handleLogin.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;

			localStorage.setItem(currentUser, JSON.stringify(action.payload.user));
			localStorage.setItem(currentToken, action.payload.token);
		});
	},
});

export default authSlice.reducer;

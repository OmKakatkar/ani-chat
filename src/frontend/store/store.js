import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import userReducer from "../features/Profile/userSlice";
import postReducer from "../features/Post/postSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		post: postReducer,
	},
});

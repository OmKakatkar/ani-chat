import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import userReducer from "../features/Profile/userSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

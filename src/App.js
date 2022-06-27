import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./frontend/containers/Layout/Layout";
import PrivateRoute from "./frontend/components/PrivateRoute/PrivateRoute";
import Login from "./frontend/features/Auth/Login/Login";
import MockAPI from "./frontend/mock/MockAPI";
import { ToastContainer } from "react-toastify";
import Feed from "./frontend/containers/Feed/Feed";
import SignUp from "./frontend/features/Auth/SignUp/SignUp";
import Home from "./frontend/features/Home/Home";
import Profile from "./frontend/features/Profile/Profile";
import Post from "./frontend/features/Post/Post";
import NewPosts from "./frontend/components/NewPosts/NewPosts";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route
					element={
						<PrivateRoute>
							<Layout />
						</PrivateRoute>
					}
				>
					<Route path="/feed" element={<Feed />}>
						<Route index element={<NewPosts />} />
						<Route path="new" element={<NewPosts />} />
					</Route>
					<Route path="/profile" element={<Profile />} />
					<Route path="/new-post" element={<Post />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="mock" element={<MockAPI />} />
				<Route path="/" element={<Home />} />
				<Route path="*" />
			</Routes>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;

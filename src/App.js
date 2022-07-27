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
import Bookmarks from "./frontend/components/Bookmarks/Bookmarks";
import SinglePost from "./frontend/features/SinglePost/SinglePost";
import TrendingPosts from "./frontend/components/TrendingPosts/TrendingPosts";
import PersonalizedPosts from "./frontend/components/PersonalizedPosts/PersonalizedPosts";
import Auth from "./frontend/components/Auth/Auth";

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
						<Route path="new" element={<NewPosts />} />
						<Route path="trending" element={<TrendingPosts />} />
						<Route path="personalized" element={<PersonalizedPosts />} />
					</Route>
					<Route element={<Feed />}>
						<Route path="/bookmarks" element={<Bookmarks />} />
						<Route path="/post/:postId" element={<SinglePost />} />
					</Route>
					<Route path="/profile" element={<Profile />} />
					<Route path="/user/:userId" element={<Profile />} />
				</Route>
				<Route element={<Auth />}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="/" element={<Home />} />
				</Route>
				<Route path="mock" element={<MockAPI />} />
				<Route path="*" />
			</Routes>
			<Post />
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;

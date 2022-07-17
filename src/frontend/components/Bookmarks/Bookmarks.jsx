import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllPosts } from "../../features/Post/postSlice";
import PostCard from "../PostCard/PostCard";

function Bookmarks() {
	const { user } = useSelector((store) => store.auth);
	const allBookmarks = user.bookmarks;

	const dispatch = useDispatch();
	useEffect(() => {
		if (!allBookmarks.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allBookmarks.length, dispatch]);

	return (
		<>
			{allBookmarks.length ? (
				allBookmarks.map((post) => <PostCard key={post._id} post={post} />)
			) : (
				<p className="text-xhuge text-white text-center">No Posts Bookmarked</p>
			)}
		</>
	);
}
export default Bookmarks;

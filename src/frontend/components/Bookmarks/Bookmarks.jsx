import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllPosts } from "../../features/Post/postSlice";
import { getUnionArraysOfObjects } from "../../utils/util";
import PostCard from "../PostCard/PostCard";

function Bookmarks() {
	const { user } = useSelector((store) => store.auth);
	const { allPosts } = useSelector((store) => store.post);

	const allBookmarks = getUnionArraysOfObjects(allPosts, user.bookmarks) || [];
	console.log(getUnionArraysOfObjects(allPosts, user.bookmarks))

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

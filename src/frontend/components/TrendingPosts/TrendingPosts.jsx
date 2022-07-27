import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllPosts } from "../../features/Post/postSlice";
import PostCard from "../PostCard/PostCard";

function TrendingPosts() {
	const { allPosts } = useSelector((store) => store.post);

	const dispatch = useDispatch();
	useEffect(() => {
		if (!allPosts.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allPosts.length, dispatch]);

	return (
		<>
			{allPosts.length > 0 &&
				[...allPosts]
					.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
					.map((post) => <PostCard key={post._id} post={post} />)}
		</>
	);
}
export default TrendingPosts;

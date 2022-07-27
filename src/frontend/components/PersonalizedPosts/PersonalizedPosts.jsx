import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllPosts } from "../../features/Post/postSlice";
import { getUnionArraysOfObjects } from "../../utils/util";
import PostCard from "../PostCard/PostCard";

function PersonalizedPosts() {
	const { allPosts } = useSelector((store) => store.post);
	const { user } = useSelector((store) => store.auth);

	const dispatch = useDispatch();
	useEffect(() => {
		if (!allPosts.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allPosts.length, dispatch]);

	const personalizedPosts =
		getUnionArraysOfObjects(allPosts, user.following, 'username') || [];

	return (
		<>
			{personalizedPosts.length > 0 ?
				personalizedPosts
					.map((post) => <PostCard key={post._id} post={post} />)
				: <h2 className="text-xhuge text-white text-center">No Users Followed</h2>}
		</>
	);
}
export default PersonalizedPosts;

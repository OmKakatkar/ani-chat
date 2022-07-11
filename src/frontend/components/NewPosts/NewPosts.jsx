import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllPosts } from "../../features/Post/postSlice";
import PostCard from "../PostCard/PostCard";

function NewPosts() {
	const { allPosts } = useSelector((store) => store.post);

	const dispatch = useDispatch();
	useEffect(() => {
		if (!allPosts.length) {
			dispatch(handleGetAllPosts());
		}
	}, [allPosts.length, dispatch]);

	return (
		<>
			{allPosts.length &&
				allPosts.map((post) => <PostCard key={post._id} post={post} />)}
		</>
	);
}
export default NewPosts;

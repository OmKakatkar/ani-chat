import dayjs from "dayjs";
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
			{allPosts.length > 0 &&
				[...allPosts]
					.sort((a, b) => {
						const time1 = dayjs(a.createdAt);
						const time2 = dayjs(b.createdAt);
						return time2.diff(time1);
					})
					.map((post) => <PostCard key={post._id} post={post} />)}
		</>
	);
}
export default NewPosts;

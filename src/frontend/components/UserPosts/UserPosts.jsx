import { useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";

function UserPosts({ userName }) {
	const { allPosts } = useSelector((store) => store.post);
	console.log(userName);
	const userPosts = allPosts.filter((post) => post.username === userName);

	return (
		<>
			<h2 className="text-center text-white text-huge mg-top-2r">
				{userPosts.length > 0 ? "User Posts" : "No Posts to Display"}
			</h2>
			{userPosts.length > 0 &&
				userPosts.map((post) => <PostCard key={post._id} post={post} />)}
		</>
	);
}
export default UserPosts;

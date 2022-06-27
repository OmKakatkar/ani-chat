import { Outlet } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import "./Feed.css";

function Feed() {
	return (
		<>
			<Tabs />
			<div className="posts">
				<Outlet />
			</div>
		</>
	);
}
export default Feed;

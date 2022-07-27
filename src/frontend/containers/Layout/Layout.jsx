import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import SideBarLeft from "../../components/SideBar/SideBarLeft";
import SideBarRight from "../../components/SideBar/SideBarRight";
import Post from ".././../features/Post/Post";

function Layout() {
	return (
		<>
			<Header />
			<SideBarLeft />
			<main className="main-container flex-container flex-column">
				<Outlet className="main-container-body main-container-body-offset" />
			</main>
			<SideBarRight />
			<Post />
		</>
	);
}
export default Layout;

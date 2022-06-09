import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import SideBarLeft from "../../components/SideBar/SideBarLeft";
import SideBarRight from "../../components/SideBar/SideBarRight";
import Tabs from "../../components/Tabs/Tabs";

function Layout() {
	return (
		<>
			<Header />
			<Tabs/>
			<SideBarLeft />
			<main className="main-container flex-container">
				<Outlet className="main-container-body main-container-body-offset" />
			</main>
			<SideBarRight />
		</>
	);
}
export default Layout;

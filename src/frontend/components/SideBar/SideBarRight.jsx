import "./SideBar.css";

function SideBarRight() {
	return (
		<div className="sidebar sidebar-right">
			<div className="sidebar-spacer"></div>
			<div className="sidebar-content">
				<nav className="sidebar-inner-content">
					<h2 className="text-center">You might know</h2>
					<div className="sidebar-spacer"></div>
					<ul className="sidebar-list"></ul>
				</nav>
			</div>
		</div>
	);
}

export default SideBarRight;

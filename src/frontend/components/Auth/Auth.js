import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function Auth() {
	const { token } = useSelector((store) => store.auth);
	const location = useLocation();

	if (token) {
		return <Navigate replace to={location.state?.path || '/feed/new'} />;
	}

	return <Outlet />;
}
export default Auth;

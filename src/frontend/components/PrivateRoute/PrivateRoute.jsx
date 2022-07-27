import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
	const { token } = useSelector((store) => store.auth);
	const location = useLocation();

	if (!token) {
		console.log(location.pathname);
		return <Navigate replace to="/login" state={{ path: location.pathname }} />;
	}

	return children;
}
export default RequireAuth;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Input from "../../../components/Input/Input";
import { SIGNUP_DB } from "../../../constants/signup-form-data";
import { TEST_USER_SIGNUP } from "../../../constants/test-user";
import { handleSignUp } from "../authSlice";

import "../Auth.css";

function SignUp() {
	const initialSignUpData = {
		firstName: "",
		lastName: "",
		username: "",
		password: "",
	};
	const [signUpData, setSignUpData] = useState(initialSignUpData);
	const [acceptTnC, setAcceptTnC] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(handleSignUp(signUpData));
	};

	const handleChange = (e) => {
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	};

	const handleGuestSignUp = () => {
		setSignUpData(TEST_USER_SIGNUP);
	};

	return (
		<main className="flex-container auth-container">
			<div className="form-container">
				<form className="flex-container flex-column" onSubmit={handleSubmit}>
					<h1 className="text-xhuge form-heading">Sign Up</h1>
					{SIGNUP_DB.map(({ id, type, label, name, autoComplete }) => (
						<Input
							key={id}
							type={type}
							label={label}
							name={name}
							autoComplete={autoComplete}
							value={signUpData[name]}
							handleChange={handleChange}
						/>
					))}
					<div className="input-container">
						<label htmlFor="remember" className="checkbox text-xsm">
							<input
								type="checkbox"
								name="remember"
								id="remember"
								className="checkbox-input"
								checked={acceptTnC}
								onChange={() =>
									setAcceptTnC((currentAcceptTnC) => !currentAcceptTnC)
								}
							/>
							<div className="checkbox-icon"></div>I accept all Terms &
							Conditions
						</label>
					</div>
					<button
						type="submit"
						className="btn rounded bg-blue"
						disabled={
							!signUpData.firstName ||
							!signUpData.lastName ||
							!signUpData.username ||
							!signUpData.password ||
							!acceptTnC
						}
					>
						Create New Account
					</button>
				</form>
				<button
					type="submit"
					className="btn rounded bd-blue"
					onClick={handleGuestSignUp}
				>
					Guest Credentials
				</button>
				<div className="text-center">
					<Link to="/login" className="form-link">
						Already have an account
					</Link>
				</div>
			</div>
		</main>
	);
}

export default SignUp;

// import React from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/inputs/InputText";
import InputPassword from "../components/inputs/InputPassword";
import Button from "../components/inputs/Button";
import { useState } from "react";
import { AuthService } from "../services/AuthService";
import { useAuthenticate } from "../store/authenticate";
import { useNavigate } from "react-router-dom";
import { Helpers } from "../helpers";

function Login() {
	const setAuth = useAuthenticate((state) => state.setAuth);
	const navigate = useNavigate();
	const [btnLoading, setBtnLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			username: "admin",
			password: "123123",
		},
	});
	const loginSubmit = async (data) => {
		setBtnLoading(true);
		await AuthService.login(data)
			.then((response) => {
				setAuth({
					auth: response.data,
					isLoggedIn: true,
				});
				window.localStorage.setItem("user", JSON.stringify(response.data));
				Helpers.setAuthHeaders();
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
		setBtnLoading(false);
	};
	return (
		<>
			<div className="col-md-8 col-lg-6 col-xl-5">
				<div className="card mt-5">
					<div className="card-body p-4">
						<div className="text-center mt-2">
							<h5 className="text-primary">Administrator</h5>
							<p className="text-muted">เข้าสู่ระบบเพื่อดำเนินการต่อ</p>
						</div>
						<div className="p-2 mt-4">
							<form onSubmit={handleSubmit(loginSubmit)} method="post">
								<div className="mb-3">
									<label htmlFor="username" className="form-label">
										Username
									</label>
									<InputText
										control={control}
										register={register}
										name="username"
										errors={errors.username}
										validates={{
											required: {
												value: true,
												message: "กรุณาระบุไอดี",
											},
										}}
										placeholder="Enter Username"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="password-input">
										Password
									</label>
									<InputPassword
										control={control}
										register={register}
										name="password"
										errors={errors.password}
										validates={{
											required: {
												value: true,
												message: "กรุณาระบุรหัสผ่าน",
											},
										}}
										placeholder="Enter Password"
									/>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue
										id="auth-remember-check"
									/>
									<label
										className="form-check-label"
										htmlFor="auth-remember-check"
									>
										Remember me
									</label>
								</div>
								<div className="mt-4">
									<div className="pull-right">
										<Button
											type={`submit`}
											value={`เข้าสู่ระบบ`}
											loading={btnLoading}
											icon={`fa fa-sign-in`}
											color={`primary`}
											size="sm"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;

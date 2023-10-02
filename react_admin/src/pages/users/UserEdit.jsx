import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
	Button,
	InputFile,
	InputSelect,
	InputText,
} from "../../components/inputs";
import { UserService } from "../../services/UserService";
import { Helpers } from "../../helpers";

function UserEdit({ user, userRoles, getUserData }) {
	const [modal, setModal] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);
	const [file, setFile] = useState();
	const [previewFile, setPreviewFile] = useState(user.image_url);
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			user_role_id: user.user_role_id,
			username: user.username,
			password: "",
			name: user.name,
			password_confirm: "",
		},
	});

	const uploadFile = (e) => {
		setFile(e.target.files[0]);
		setPreviewFile(URL.createObjectURL(e.target.files[0]));
	};

	const updateUser = async (values) => {
		setBtnLoading(true);
		const formData = new FormData();
		formData.append("logo", file);
		formData.append("name", values.name);
		formData.append("user_role_id", values.user_role_id);
		formData.append("username", values.username);
		formData.append("password", values.password);
		formData.append("password_confirm", values.password_confirm);
		await UserService.update(formData, user.id)
			.then(() => {
				Helpers.notify("แก้ไขข้อมูลสำเร็จ", "success");
				getUserData();
			})
			.catch((error) => {
				Helpers.notify(error.data, "error");
			});
		setBtnLoading(false);
		setModal(false);
	};

	return (
		<>
			<button
				className="btn btn-sm btn-warning m-1 text-dark"
				onClick={() => setModal(true)}
			>
				<i className="fa fa-edit"></i>
			</button>
			<Modal
				show={modal}
				onHide={() => {
					setModal(false);
				}}
			>
				<form onSubmit={handleSubmit(updateUser)}>
					<Modal.Header closeButton className="bg-warning pb-4">
						<Modal.Title>แก้ไขผู้ใช้งาน</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="row">
							<div className="col-lg-3">
								<div className="image-item">
									<img
										className="card-img-top img-fluid rounded-circle mb-4 image-fix"
										src={previewFile}
										width={50}
										height={50}
										alt="bank logo"
									/>
								</div>
							</div>
							<div className="col-lg-12x">
								<label htmlFor="">รูป</label>
								<br />
								<InputFile
									type="file"
									name="logo"
									register={register}
									errors={errors.logo}
									onChangeCallback={(e) => uploadFile(e)}
								/>
							</div>
							<div className="col-lg-12">
								<label htmlFor="">ตำแหน่ง</label>
								<InputSelect
									register={register}
									name="user_role_id"
									options={userRoles}
									keyOption={`id`}
									valueOption={`name_en`}
									className={`form-control`}
									errors={errors.user_role_id}
									validates={{
										required: {
											value: true,
											message: "กรุณาระบุตำแหน่ง",
										},
										min: {
											value: 6,
											message: "",
										},
									}}
								/>
							</div>
							<div className="col-lg-12">
								<label htmlFor="">ชื่อผู้ใช้งาน</label>
								<InputText
									register={register}
									name="name"
									errors={errors.name}
									control={control}
									validates={{
										required: {
											value: true,
											message: "กรุณาระบุชื่อผู้ใช้งาน",
										},
									}}
								/>
							</div>
							<div className="col-lg-12">
								<label htmlFor="">Username</label>
								<InputText
									register={register}
									name="username"
									errors={errors.username}
									control={control}
									validates={{
										required: {
											value: true,
											message: "กรุณาระบุไอดี",
										},
									}}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button
							className="btn btn-soft-secondary btn-sm"
							size="sm"
							onClick={() => {
								setModal(false);
							}}
						>
							<i className="fa fa-times fa-mr"></i>
							ยกเลิก
						</button>
						<Button
							type={`submit`}
							color={`primary`}
							size="sm"
							icon={`fa fa-check fa-mr`}
							value={`ยืนยัน`}
							loading={btnLoading}
						/>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
}

export default UserEdit;

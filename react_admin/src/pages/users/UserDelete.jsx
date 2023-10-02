import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../components/inputs";
import { UserService } from "../../services/UserService";
import { Helpers } from "../../helpers";

function UserDelete({ user, getUserData }) {
	const [modal, setModal] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);

	const deleteUser = async () => {
		setBtnLoading(true);
		await UserService.delete(user.id)
			.then(() => {
				Helpers.notify("ลบข้อมูลสำเร็จ", "success");
				getUserData();
			})
			.catch((error) => {
				Helpers.notify(error.data, "danger");
			});
		setModal(false);
	};

	return (
		<>
			<button
				className="btn btn-sm btn-danger m-1 text-white"
				onClick={() => setModal(true)}
			>
				<i className="fa fa-times"></i>
			</button>

			<Modal
				className=""
				show={modal}
				onHide={() => {
					setModal(false);
				}}
			>
				<form>
					<Modal.Body>
						<>
							<div className="modal-body text-center p-5">
								<div className="mt-4">
									<h4 className="mb-3">ต้องการลบข้อมูลนี้ใช้หรือไม่ ?</h4>
									<p className="text-muted mb-4"></p>
									<div className="hstack gap-2 justify-content-center">
										<button
											type="button"
											className="btn btn-light"
											data-bs-dismiss="modal"
											onClick={() => setModal(false)}
										>
											ยกเลิก
										</button>
										<Button
											type={`button`}
											color={`primary`}
											size="sm"
											icon={`fa fa-check fa-mr`}
											value={`ยืนยัน`}
											loading={btnLoading}
											onClickCallback={() => deleteUser()}
										/>
									</div>
								</div>
							</div>
						</>
					</Modal.Body>
				</form>
			</Modal>
		</>
	);
}

export default UserDelete;

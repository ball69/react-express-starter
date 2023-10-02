import { useEffect, useState } from "react";
import { usePageLoading } from "../../store/loading";
import { useBreadcrumbs } from "../../store/breadcrumbs";
import { UserService } from "../../services/UserService";
import UserCreate from "./UserCreate";
import Paginate from "../../components/Paginate";
import Loading from "../../components/Loading";
import InputDateTime from "../../components/inputs/InputDateTime";
import moment from "moment";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";
import { UserRoleService } from "../../services/UserRoleService";

function User() {
	//StartPage
	const { setLoading } = usePageLoading((state) => state);
	const { setTitle, setBreadcrumbs } = useBreadcrumbs((state) => state);

	//Paginate
	const itemPerPage = 15;
	const [users, setUsers] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [pageLoading, setPageLoading] = useState(true);

	//QueryDate
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [userRoles, setUserRoles] = useState();

	const getUserData = async (page = 1) => {
		setPageLoading(true);
		const queryDate =
			startDate &&
			"&start_date=" +
				moment(startDate).format("yyyy-MM-DD HH:mm:ss") +
				"&end_date=" +
				moment(endDate).format("yyyy-MM-DD HH:mm:ss");
		const pageinate_param =
			"?page=" +
			page +
			"&item_per_page=" +
			itemPerPage +
			(queryDate && queryDate);
		await UserService.get(pageinate_param)
			.then((response) => {
				const page_count = Math.ceil(response.data.count / itemPerPage);
				setUsers(response.data.user);
				setPageCount(page_count);
			})
			.catch((error) => {
				console.log(error);
			});
		setPageLoading(false);
	};

	const search = () => {
		getUserData();
	};

	const getUserRoles = async () => {
		await UserRoleService.get()
			.then((response) => {
				setUserRoles(response.data.user_roles);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		setLoading(true);
		setTitle("จัดการผู้ใช้งาน");
		setBreadcrumbs([
			{
				name: "หน้าแรก",
				path: "/",
			},
			{
				name: "จัดการผู้ใช้งาน",
				path: null,
			},
		]);
		(async () => {
			await getUserData();
			await getUserRoles();
			setLoading(false);
		})();
	}, []);

	return (
		<>
			<div className="pull-right">
				<UserCreate getUserData={getUserData} userRoles={userRoles} />
			</div>
			<h4>
				<i className="fad fa-users ml-5"></i> จัดการผู้ใช้งาน
			</h4>
			<hr />
			<div className="data-content">
				<form className="form-inline mb-2">
					<div className="row">
						<div className="col-4 col-lg-1 col-md-4">
							<label className="sr-only">วันที่เริ่ม</label>
							<InputDateTime date={startDate} setDate={setStartDate} />
						</div>
						<div className="col-4 col-lg-1 col-md-4">
							<label className="sr-only">วันที่สิ้นสุด</label>
							<InputDateTime date={endDate} setDate={setEndDate} />
						</div>
						<div className="col-4 col-lg-2">
							<button
								type="button"
								onClick={() => search()}
								className="btn btn-primary"
							>
								<i className="fa fa-search"></i>
							</button>
						</div>
					</div>
				</form>
				{pageLoading ? (
					<>
						<Loading />
					</>
				) : (
					<>
						{users &&
							users.map((user, key) => {
								return (
									<div key={key}>
										<>
											<ul className="list-group">
												<li className="list-group-item">
													<div className="d-flex align-items-center">
														<div className="flex-grow-1">
															<div className="d-flex">
																<div className="flex-shrink-0 avatar-xs">
																	<div className="avatar-title bg-danger-subtle text-danger rounded">
																		<img
																			src="https://via.placeholder.com/30"
																			alt=""
																		/>
																	</div>
																</div>
																<div className="flex-shrink-0 ms-2">
																	<h6 className="fs-14 mb-0">
																		{user.username}
																	</h6>
																	<small className="text-muted">
																		{/* {moment(user.createdAt).zone(120)} */}
																	</small>
																</div>
															</div>
														</div>
														<div className="flex-shrink-1">
															<UserEdit
																user={user}
																userRoles={userRoles}
																getUserData={getUserData}
															/>
															<UserDelete
																user={user}
																getUserData={getUserData}
															/>
														</div>
													</div>
												</li>
											</ul>
										</>
									</div>
								);
							})}
					</>
				)}
			</div>
			<hr />
			<div className="pull-right">
				<Paginate
					itemsPerPage={itemPerPage}
					pageCount={pageCount}
					getItemDataCallback={getUserData}
				/>
			</div>
		</>
	);
}

export default User;

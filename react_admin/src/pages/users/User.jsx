import { useEffect, useState } from "react";
import { usePageLoading } from "../../store/loading";
import { useBreadcrumbs } from "../../store/breadcrumbs";
import { UserService } from "../../services/UserService";
import ReactPaginate from "react-paginate";

function User() {
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	const itemsPerPage = 5;
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};
	const { setLoading } = usePageLoading((state) => state);
	const { setTitle, setBreadcrumbs } = useBreadcrumbs((state) => state);
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
			await UserService.get()
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
			await setLoading(false);
		})();
	}, []);

	return (
		<>
			<h3> จัดการผู้ใช้งาน</h3>
			{currentItems &&
				currentItems.map((item, key) => {
					return (
						<div key={key}>
							<h3>Item #{item}</h3>
						</div>
					);
				})}
			<ReactPaginate
				nextLabel="ถัดไป >"
				previousLabel="< ก่อนหน้า"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default User;

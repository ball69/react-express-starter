import ReactPaginate from "react-paginate";

function Paginate({ pageCount, getItemDataCallback }) {
	const handlePageClick = (event) => {
		const page = event.selected + 1;
		getItemDataCallback(page);
	};
	return (
		<h1>
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
		</h1>
	);
}

export default Paginate;

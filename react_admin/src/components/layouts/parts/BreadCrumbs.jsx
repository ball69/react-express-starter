import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../../../store/breadcrumbs";

function BreadCrumbs() {
	const { breadcrumbs } = useBreadcrumbs((state) => state);
	// console.log(title);
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="page-title-box d-sm-flex align-items-center justify-content-between">
						<div className="page-title-right">
							<ol className="breadcrumb m-0">
								{breadcrumbs.map((breadcrumb, key) => {
									return (
										<li
											className={`breadcrumb-item ${
												breadcrumb.path === null ? `active` : ``
											}`}
											key={key}
										>
											{breadcrumb.path !== null ? (
												<Link to={breadcrumb.path}>{breadcrumb.name}</Link>
											) : (
												<>{breadcrumb.name}</>
											)}
										</li>
									);
								})}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BreadCrumbs;

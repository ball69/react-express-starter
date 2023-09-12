// import React from "react";

function DropdownCart() {
	return (
		<>
			<div className="dropdown topbar-head-dropdown ms-1 header-item">
				<button
					type="button"
					className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
					id="page-header-cart-dropdown"
					data-bs-toggle="dropdown"
					data-bs-auto-close="outside"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i className="bx bx-shopping-bag fs-22" />
					<span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info">
						5
					</span>
				</button>
				<div
					className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart"
					aria-labelledby="page-header-cart-dropdown"
				>
					<div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
						<div className="row align-items-center">
							<div className="col">
								<h6 className="m-0 fs-16 fw-semibold">My Cart</h6>
							</div>
							<div className="col-auto">
								<span className="badge bg-warning-subtle text-warning fs-13">
									<span className="cartitem-badge">7</span> items
								</span>
							</div>
						</div>
					</div>
					<div data-simplebar style={{ maxHeight: 300 }}>
						<div className="p-2">
							<div className="text-center empty-cart" id="empty-cart">
								<div className="avatar-md mx-auto my-3">
									<div className="avatar-title bg-info-subtle text-info fs-36 rounded-circle">
										<i className="bx bx-cart" />
									</div>
								</div>
								<h5 className="mb-3">Your Cart is Empty!</h5>
								<a
									href="apps-ecommerce-products.html"
									className="btn btn-success w-md mb-3"
								>
									Shop Now
								</a>
							</div>
							<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
								<div className="d-flex align-items-center">
									<img
										src="/assets/images/products/img-1.png"
										className="me-3 rounded-circle avatar-sm p-2 bg-light"
										alt="user-pic"
									/>
									<div className="flex-grow-1">
										<h6 className="mt-0 mb-1 fs-14">
											<a
												href="apps-ecommerce-product-details.html"
												className="text-reset"
											>
												Branded T-Shirts
											</a>
										</h6>
										<p className="mb-0 fs-12 text-muted">
											Quantity: <span>10 x $32</span>
										</p>
									</div>
									<div className="px-2">
										<h5 className="m-0 fw-normal">
											$<span className="cart-item-price">320</span>
										</h5>
									</div>
									<div className="ps-2">
										<button
											type="button"
											className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
										>
											<i className="ri-close-fill fs-16" />
										</button>
									</div>
								</div>
							</div>
							<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
								<div className="d-flex align-items-center">
									<img
										src="/assets/images/products/img-2.png"
										className="me-3 rounded-circle avatar-sm p-2 bg-light"
										alt="user-pic"
									/>
									<div className="flex-grow-1">
										<h6 className="mt-0 mb-1 fs-14">
											<a
												href="apps-ecommerce-product-details.html"
												className="text-reset"
											>
												Bentwood Chair
											</a>
										</h6>
										<p className="mb-0 fs-12 text-muted">
											Quantity: <span>5 x $18</span>
										</p>
									</div>
									<div className="px-2">
										<h5 className="m-0 fw-normal">
											$<span className="cart-item-price">89</span>
										</h5>
									</div>
									<div className="ps-2">
										<button
											type="button"
											className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
										>
											<i className="ri-close-fill fs-16" />
										</button>
									</div>
								</div>
							</div>
							<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
								<div className="d-flex align-items-center">
									<img
										src="/assets/images/products/img-3.png"
										className="me-3 rounded-circle avatar-sm p-2 bg-light"
										alt="user-pic"
									/>
									<div className="flex-grow-1">
										<h6 className="mt-0 mb-1 fs-14">
											<a
												href="apps-ecommerce-product-details.html"
												className="text-reset"
											>
												Borosil Paper Cup
											</a>
										</h6>
										<p className="mb-0 fs-12 text-muted">
											Quantity: <span>3 x $250</span>
										</p>
									</div>
									<div className="px-2">
										<h5 className="m-0 fw-normal">
											$<span className="cart-item-price">750</span>
										</h5>
									</div>
									<div className="ps-2">
										<button
											type="button"
											className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
										>
											<i className="ri-close-fill fs-16" />
										</button>
									</div>
								</div>
							</div>
							<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
								<div className="d-flex align-items-center">
									<img
										src="/assets/images/products/img-6.png"
										className="me-3 rounded-circle avatar-sm p-2 bg-light"
										alt="user-pic"
									/>
									<div className="flex-grow-1">
										<h6 className="mt-0 mb-1 fs-14">
											<a
												href="apps-ecommerce-product-details.html"
												className="text-reset"
											>
												Gray Styled T-Shirt
											</a>
										</h6>
										<p className="mb-0 fs-12 text-muted">
											Quantity: <span>1 x $1250</span>
										</p>
									</div>
									<div className="px-2">
										<h5 className="m-0 fw-normal">
											$ <span className="cart-item-price">1250</span>
										</h5>
									</div>
									<div className="ps-2">
										<button
											type="button"
											className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
										>
											<i className="ri-close-fill fs-16" />
										</button>
									</div>
								</div>
							</div>
							<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
								<div className="d-flex align-items-center">
									<img
										src="/assets/images/products/img-5.png"
										className="me-3 rounded-circle avatar-sm p-2 bg-light"
										alt="user-pic"
									/>
									<div className="flex-grow-1">
										<h6 className="mt-0 mb-1 fs-14">
											<a
												href="apps-ecommerce-product-details.html"
												className="text-reset"
											>
												Stillbird Helmet
											</a>
										</h6>
										<p className="mb-0 fs-12 text-muted">
											Quantity: <span>2 x $495</span>
										</p>
									</div>
									<div className="px-2">
										<h5 className="m-0 fw-normal">
											$<span className="cart-item-price">990</span>
										</h5>
									</div>
									<div className="ps-2">
										<button
											type="button"
											className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
										>
											<i className="ri-close-fill fs-16" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border"
						id="checkout-elem"
					>
						<div className="d-flex justify-content-between align-items-center pb-3">
							<h5 className="m-0 text-muted">Total:</h5>
							<div className="px-2">
								<h5 className="m-0" id="cart-item-total">
									$1258.58
								</h5>
							</div>
						</div>
						<a
							href="apps-ecommerce-checkout.html"
							className="btn btn-success text-center w-100"
						>
							Checkout
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default DropdownCart;

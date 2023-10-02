function Button({ type, loading = false, value, icon, color, size = "lg" }) {
	return (
		<>
			<button
				size={size}
				disabled={loading ? true : false}
				type={type}
				className={`btn btn-${size} ${
					loading ? `btn-outline-${color}` : ``
				} btn-${color} btn-load`}
			>
				{!loading ? (
					<>
						<i className={icon} style={{ marginRight: "10px" }}></i>
						{value}
					</>
				) : (
					<>
						<span className="d-flex align-items-center">
							<span className="spinner-grow flex-shrink-0 me-2" role="status">
								<span className="visually-hidden">Loading...</span>
							</span>
							<span className="flex-grow-1 ">Loading...</span>
						</span>
					</>
				)}
			</button>
		</>
	);
}

export default Button;

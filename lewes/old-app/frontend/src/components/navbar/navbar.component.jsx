function Navbar() {


	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top justify-content-end">
				<div className="container-fluid">

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-2">

							<li className="nav-item m-1">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>

							<li className="nav-item m-1">
								<a className="nav-link" href="#">Exercises</a>
							</li>

							<li className="nav-item m-1">
								<a className="nav-link" aria-current="page" href="#">Login</a>
							</li>

							<li className="nav-item m-1">
								<a className="nav-link" aria-current="page" href="#">Sign Up</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

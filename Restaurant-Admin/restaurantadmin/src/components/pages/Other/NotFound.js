
function NotFound() {
	return (
		<>
		<body className="hold-transition theme-primary bg-img" style={{ backgroundImage: "url(../images/auth-bg/bg-4.jpg)" }}>
			<section className="error-page h-p100">
				<div className="container h-p100">
					<div className="row h-p100 align-items-center justify-content-center text-center">
						<div className="col-lg-7 col-md-10 col-12">
							<div className="rounded30 p-50">
								<img src="../images/auth-bg/404.jpg" className="max-w-200" alt="" />
								<h1>Page Not Found !</h1>
								<h3>looks like, page doesn't exist</h3>
								<div className="my-30">
									<a className="btn btn-danger">Back to dashboard</a>
								</div>

								<form className="search-form mx-auto mt-30 w-p75">
									<div className="input-group rounded5 overflow-h">
										{/* <input type="text" name="search" className="form-control" placeholder="Search" />
										<div className="input-group-prepend">
											<button type="submit" name="submit" className="btn btn-danger btn-sm"><i className="fa fa-search"></i></button>
										</div> */}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</body>
		</>
	)
}
export default NotFound;
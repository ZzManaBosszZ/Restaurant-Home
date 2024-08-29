function BreadCrumb() {
    return (
        <div className="breadcrumb-area bg-cover shadow dark text-center text-light" style={{ backgroundImage: "url(assets/img/shape/5.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h1>About Us</h1>
                        <ul className="breadcrumb">
                            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
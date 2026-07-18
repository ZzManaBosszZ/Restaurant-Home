function Banner() {
    return (
        <div className="banner-style-four-area text-light text-center bg-cover" style={{ background: "url(assets/img/banner/14.jpg)" }}>
            <div className="banner-style-four-content shadow dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2>Best Restaurant</h2>
                            <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Best Food Since - 1865</textPath></text>
                                </svg>
                                <a href="" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
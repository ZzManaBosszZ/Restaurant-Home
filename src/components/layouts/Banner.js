function Banner() {
    return (
        <div class="banner-style-four-area text-light text-center bg-cover" style={{ background: "url(assets/img/banner/14.jpg)" }}>
            <div class="banner-style-four-content shadow dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h2>Best Restaurant</h2>
                            <div class="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Best Food Since - 1865</textPath></text>
                                </svg>
                                <a href="" class="popup-youtube"><i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
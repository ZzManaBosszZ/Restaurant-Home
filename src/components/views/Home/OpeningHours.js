function Opening() {
    return ( 
        <div className="opening-hours-area default-padding overflow-hidden">
        <div className="container">
            <div className="opening-hour-items">
                <h2 className="text-fixed">Restan</h2>
                <div className="shape">
                    <img src="assets/img/shape/4.png" alt="Image Not Found"/>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="opening-hours-thumb video-bg-live">
                            <img src="assets/img/banner/7.jpg" alt="Image Not Found"/>
                            <div className="player" data-property="{videoURL:'0Fs-4GiNxQ8',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:654, opacity:1, quality:'default'}"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="opening-hours-info animate" data-animate="fadeInLeft">
                            <h3>Opening Hours</h3>
                            <p>
                                A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                            </p>
                            <ul className="opening-hours-table">
                                <li>
                                    <h6>Sunday to Tuesday:</h6> <span>10:00 - 09:00</span>
                                </li>
                                <li>
                                    <h6>Wednesday to Thursday:</h6> <span>11:30 - 10:30</span>
                                </li>
                                <li>
                                    <h6>Friday & Saturday:</h6> <span>10:30  - 12:00</span>
                                </li>
                            </ul>
                            <div className="call-to-action">
                                <div className="icon">
                                    <img src="assets/img/icon/6.png" alt="Image Not Found"/>
                                </div>
                                <div className="info">
                                    <p>Call Anytime</p>
                                    <h4><a href="#">+964733-378901</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Opening;
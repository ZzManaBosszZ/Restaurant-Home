function HeaderTop() {
    return (
        <div class="top-bar-area top-bar-style-one bg-theme text-light bg-transparent">
            <div class="container">
                <div class="row align-center">
                    <div class="col-lg-7">
                        <ul class="item-flex">
                            <li>
                                <a href="tel:+4733378901">
                                    <img src="assets/img/icon/6.png" alt="Icon" /> Phone: +4733378901
                                </a>
                            </li>
                            <li>
                                <a href="mailto:name@email.com">
                                    <img src="assets/img/icon/7.png" alt="Icon" /> Email: food@restan.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5 text-end">
                        <p>
                            <i class="fas fa-map-marker-alt"></i> 175 10h Street, Office 375 Berlin, De 21562
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
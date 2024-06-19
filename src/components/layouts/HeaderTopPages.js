function HeaderTopPages() {
    return ( 
        <div class="top-bar-area top-bar-style-one bg-theme text-light">
        <div class="container">
            <div class="row align-center">
                <div class="col-lg-7">
                    <ul class="item-flex">
                        <li>
                             <a href="tel:+4733378901"> 
                                <img src="assets/img/icon/6.png" alt="Icon"/> Phone: +4733378901
                            </a>
                        </li>
                        <li>
                            <a href="mailto:name@email.com">
                                <img src="assets/img/icon/7.png" alt="Icon"/> Email: food@restan.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-5 text-end">
                    <div class="item-flex">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="assets/img/icon/flag.png" alt="Image Not Found"/>
                                English <i class="fas fa-angle-down"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item" href="#">Spanish</a></li>
                              <li><a class="dropdown-item" href="#">Arabic</a></li>
                            </ul>
                        </div>
                        <div class="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default HeaderTopPages;
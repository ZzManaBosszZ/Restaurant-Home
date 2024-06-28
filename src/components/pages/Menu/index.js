import React from 'react'
import LayoutPages from '../../layouts/LayoutPage'

function Menu() {
    return (
        <LayoutPages>
            <div class="food-menu-area shape-less default-padding-top">
                <div class="container">
                    <div class="food-menu-items text-light">
                        <div class="row">
                            <div class="col-lg-12 text-center">

                                <div class="nav nav-tabs food-menu-nav" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        Main Dishes
                                    </button>
                                    <button class="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        Desserts
                                    </button>
                                    <button class="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                        Sea Food
                                    </button>
                                    <button class="nav-link" id="nav-id-4" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                                        Beverage
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="tab-content food-menu-tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                        <div class="row">
                                            <div class="col-xl-5 thumb" style={{ background: "url(assets/img/banner/3.jpg)" }}>
                                                <div class="discount-badge">
                                                    <strong>15%</strong> Discount
                                                </div>
                                            </div>
                                            <div class="col-xl-7">
                                                <div class="info">
                                                    <ul class="meal-type">
                                                        <li>Half</li>
                                                        <li>Full</li>
                                                    </ul>
                                                    <ul class="meal-items">
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/1.jpg" alt=" Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Chicken Alfredo</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$20</span>
                                                                        <span>$30</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/2.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Fish & Chips</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$36</span>
                                                                        <span>$55</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Atlantic / chips / salad /tartare
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/3.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Ebony Fillet Steak</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$44</span>
                                                                        <span>$88</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Truffle mash / pepper sauce.
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/4.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Chicken Alfredo</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$20</span>
                                                                        <span>$30</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                        <div class="row">
                                            <div class="col-xl-5 thumb" style={{background: "url(assets/img/thumb/6.jpg)"}}>
                                                <div class="discount-badge">
                                                    <strong>18%</strong> Discount
                                                </div>
                                            </div>
                                            <div class="col-xl-7">
                                                <div class="info">
                                                    <ul class="meal-type">
                                                        <li>Half</li>
                                                        <li>Full</li>
                                                    </ul>
                                                    <ul class="meal-items">
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/5.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Cupcakes</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$10</span>
                                                                        <span>$20</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/6.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Brownies</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$16</span>
                                                                        <span>$34</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Atlantic / chips / salad /tartare
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/7.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Muffins</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$22</span>
                                                                        <span>$36</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Truffle mash / pepper sauce.
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/8.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Cheesecakes</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$34</span>
                                                                        <span>$66</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                                        <div class="row">
                                            <div class="col-xl-5 thumb" style={{background: "url(assets/img/thumb/7.jpg)"}}>
                                                <div class="discount-badge">
                                                    <strong>20%</strong> Discount
                                                </div>
                                            </div>
                                            <div class="col-xl-7">
                                                <div class="info">
                                                    <ul class="meal-type">
                                                        <li>Half</li>
                                                        <li>Full</li>
                                                    </ul>
                                                    <ul class="meal-items">
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/9.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Salmon Fry</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$40</span>
                                                                        <span>$70</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/10.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Pangasius or Basa</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$15</span>
                                                                        <span>$55</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Atlantic / chips / salad /tartare
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/11.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Clams</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$45</span>
                                                                        <span>$78</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Truffle mash / pepper sauce.
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/12.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Red Crab</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$20</span>
                                                                        <span>$30</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="nav-id-4">
                                        <div class="row">
                                            <div class="col-xl-5 thumb" style={{background: "url(assets/img/thumb/8.jpg)"}}>
                                                <div class="discount-badge">
                                                    <strong>25%</strong> Discount
                                                </div>
                                            </div>
                                            <div class="col-xl-7">
                                                <div class="info">
                                                    <ul class="meal-type">
                                                        <li>Half</li>
                                                        <li>Full</li>
                                                    </ul>
                                                    <ul class="meal-items">
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/13.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Wine</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$34</span>
                                                                        <span>$66</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/14.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Coffee</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$45</span>
                                                                        <span>$80</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Atlantic / chips / salad /tartare
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/15.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>Hot chocolate</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$22</span>
                                                                        <span>$45</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Truffle mash / pepper sauce.
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="thumbnail">
                                                                <img src="assets/img/food/16.jpg" alt="Image Not Found" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <div class="title">
                                                                        <h4>CMilk Shake</h4>
                                                                    </div>
                                                                    <div class="price">
                                                                        <span>$20</span>
                                                                        <span>$30</span>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom">
                                                                    <div class="left">
                                                                        <p>
                                                                            Ricotta / goat cheese / beetroot
                                                                        </p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p>
                                                                            Extra Free Juice.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPages>
    )
}

export default Menu;
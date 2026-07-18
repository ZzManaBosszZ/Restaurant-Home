import Layout from "../../layouts";
import TotalOrder from "../../views/Dashboard/TotalOrder";
import TotalOrderDelivered from "../../views/Dashboard/TotalDelivered";
import TotalOrderCancel from "../../views/Dashboard/TotalCanceled";
import TotalOrderRevenue from "../../views/Dashboard/TotalRevenue";
import DashboardStatistic from "../../views/Dashboard/Statistics";
function Home() {

    return (
        <>
            <Layout title="Home Page">
                <section className="content">
                    <div className="row">
                        <TotalOrder />
                        <TotalOrderDelivered />
                        <TotalOrderCancel />
                        <TotalOrderRevenue />
                        <DashboardStatistic />
                        <div className="col-12">
                            <div className="box bg-transparent no-shadow">
                                <div className="box-header pt-0 px-0">
                                    <h4 className="box-title">
                                        Customer Review
                                    </h4>
                                </div>
                                <div className="box-body px-0">
                                    <div className="review-slider owl-carousel">
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/1.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Johen Doe</p>
                                                                <p className="mb-0"><small className="text-mute">1 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-1.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/2.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Mical Doe</p>
                                                                <p className="mb-0"><small className="text-mute">2 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-2.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/3.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Stepni Doe</p>
                                                                <p className="mb-0"><small className="text-mute">3 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-3.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/4.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Rehan Doe</p>
                                                                <p className="mb-0"><small className="text-mute">4 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-4.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box p-0">
                                            <div className="box-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="review-tx">
                                                        <div className="d-flex mb-10">
                                                            <img src="../images/avatar/5.jpg" className="w-40 h-40 mr-10 rounded100" alt="" />
                                                            <div>
                                                                <p className="mb-0">Himesh Doe</p>
                                                                <p className="mb-0"><small className="text-mute">1 day ago</small></p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. </p>
                                                        <div className="d-flex text-warning align-items-center">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-empty"></i>
                                                            <span className="text-fade ml-10">4.5</span>
                                                        </div>
                                                    </div>
                                                    <img src="../images/food/dish-5.png" className="dish-img" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxxl-5 col-12">
                            
                            <div className="box">
                                <div className="box-header no-border">
                                    <h4 className="box-title">
                                        Today's Special
                                    </h4>
                                </div>
                                <div className="box-body pt-0">
                                    <div className="mb-5">
                                        <img className="rounded img-fluid" src="../images/food/img1.jpg" alt="" />
                                    </div>
                                    <div className="info-content">
                                        <h5 className="my-15"><a href="ecommerce_details.html">Spicy Pizza with Extra Cheese</a></h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0 text-black">$6.53</h4>
                                            <div className="d-flex align-items-center">
                                                <i className="fa fa-heart text-primary"></i>
                                                <h6 className="text-black mb-0">256k</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </section>

            </Layout>
        </>
    );
}

export default Home;
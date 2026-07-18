import Layout from "../../../layouts";
import BreadCrumb from "../../../layouts/BreadCrumb";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { getAccessToken } from "../../../../utils/auth";

function FoodDetail() {

    const { id } = useParams();

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    };

    // Generate the product code based on the hashed ID
    const generateProductCode = (id) => {
        const hash = hashCode(id);
        const productNumber = hash % 1000000; // Ensure a 6-digit number
        return `FG${productNumber.toString().padStart(6, '0')}`;
    };

    const foodCode = generateProductCode(id);

    const [foodDetail, setFoodDetail] = useState({});

    const loadData = useCallback(async () => {
        try {
            const foodDetailRequest = await api.get(url.FOOD.DETAIL.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setFoodDetail(foodDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const stars = [];
    const roundedScore = Math.round(foodDetail.star * 2) / 2;
    const fullStars = Math.floor(roundedScore);
    const halfStar = roundedScore - fullStars === 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    if (halfStar) {
        stars.push(<i key="half" className="fa fa-star-half-o"></i>); // Font Awesome 4.7.0 half-star icon
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="fa fa-star-o"></i>); // Font Awesome 4.7.0 empty-star icon
    }

    return (
        <Layout>
            <BreadCrumb title="Food Detail" />
            <section className="content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="box box-body b-1 text-center no-shadow">
                                            <img src={foodDetail.image} id="product-image" className="img-fluid" alt="" />
                                        </div>
                                        <div className="pro-photos">
                                            <div className="photos-item item-active">
                                                <img src={foodDetail.image} alt="" />
                                            </div>
                                            <div className="photos-item">
                                                <img src="../images/product/product-7.png" alt="" />
                                            </div>
                                            <div className="photos-item">
                                                <img src="../images/product/product-8.png" alt="" />
                                            </div>
                                            <div className="photos-item">
                                                <img src="../images/product/product-9.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="col-md-8 col-sm-6">
                                        <h2 className="box-title mt-0">{foodDetail.name}</h2>
                                        <div className="list-inline">
                                            {stars}
                                        </div>
                                        <h1 className="pro-price mb-0 mt-20">&#36;{foodDetail.price}
                                            <span className="old-price">&#36;540</span>
                                            <span className="text-danger">50% off</span>
                                        </h1>
                                        <hr />
                                        <p>{foodDetail.description}</p>

                                        <hr />
                                        {/* <div className="gap-items">
                                            <button className="btn btn-success"><i className="mdi mdi-shopping"></i> Buy Now!</button>
                                            <button className="btn btn-primary"><i className="mdi mdi-cart-plus"></i> Add To Cart</button>
                                            <button className="btn btn-info"><i className="mdi mdi-compare"></i> Compare</button>
                                            <button className="btn btn-danger"><i className="mdi mdi-heart"></i> Wishlist</button>
                                        </div> */}
                                        <h4 className="box-title mt-20">Key Highlights</h4>
                                        <ul className="list-icons list-unstyled">
                                            <li><i className="fa fa-check text-danger float-none"></i> Party Wear</li>
                                            <li><i className="fa fa-check text-danger float-none"></i> Nam libero tempore, cum soluta nobis est</li>
                                            <li><i className="fa fa-check text-danger float-none"></i> Omnis voluptas as placeat facere possimus omnis voluptas.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h4 className="box-title mt-40">General Info</h4>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td width="390">Brand</td>
                                                        <td> Brand Name </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td>Delivery Condition</td>
                                                        <td> Lorem Ipsum </td>
                                                    </tr> */}
                                                    <tr>
                                                        <td>Type</td>
                                                        <td> Party Wear </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Style</td>
                                                        <td> Modern </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Product Number</td>
                                                        <td> {foodCode} </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
}

export default FoodDetail;
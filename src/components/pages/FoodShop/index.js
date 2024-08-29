import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import {getAccessToken} from "../../../utils/auth"

function FoodShop() {
  const [foods, setFoods] = useState([]);

    //show list data
    useEffect(() => {
        const loadFoods = async () => { 
            try {
                const response = await api.get(url.FOOD.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setFoods(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadFoods();
    }, []);

  // Handle add to cart
  const handleAddToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === food.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...food, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!");
  };

  return (
    <LayoutPages>
      <div className="validtheme-shop-area default-padding">
        <div className="container">
          <div className="shop-listing-contentes">
            <div className="row item-flex center">
              <div className="col-lg-7">
                <div className="content">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="grid-tab-control"
                        data-bs-toggle="tab"
                        data-bs-target="#grid-tab"
                        type="button"
                        role="tab"
                        aria-controls="grid-tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-th-large"></i>
                      </button>

                      <button
                        className="nav-link"
                        id="list-tab-control"
                        data-bs-toggle="tab"
                        data-bs-target="#list-tab"
                        type="button"
                        role="tab"
                        aria-controls="list-tab"
                        aria-selected="false"
                      >
                        <i className="fas fa-th-list"></i>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col-lg-5 text-right">
                {/* <p>Showing 1–10 of {foods.length} results</p> */}
                <select name="cars" id="cars">
                  <option value="volvo">Short by latest</option>
                  <option value="saab">Short by Recent</option>
                  <option value="mercedes">Short by Popular</option>
                  <option value="audi">Short by Relevant</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tab-content tab-content-info text-center"
                id="shop-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="grid-tab"
                  role="tabpanel"
                  aria-labelledby="grid-tab-control"
                >
                  <ul className="vt-products columns-4">
                    {foods.map((food) => (
                      <li className="product" key={food.id}>
                        <div className="product-contents">
                          <div className="product-image">
                            <a href="shop-single.html">
                              <img src={food.image} alt={food.name} />
                            </a>
                            <div className="shop-action">
                              <ul>
                                <li className="wishlist">
                                  <a href="">
                                    <span>Add to wishlist</span>
                                  </a>
                                </li>
                                <li className="quick-view">
                                  <a href="#">
                                    <span>Quick view</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-caption">
                            <div className="product-tags">
                              <a href="#">{food.category}</a>
                            </div>
                            <h4 className="product-title">
                              <a href="shop-single.html">{food.name}</a>
                            </h4>
                            <div className="price">
                              <span>${food.price}</span>
                            </div>
                            <a href="#" className="cart-btn" onClick={() => handleAddToCart(food)}>
                              <i className="fas fa-shopping-bag"></i> Add to cart
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-tab"
                  role="tabpanel"
                  aria-labelledby="list-tab-control"
                >
                 
                </div>
              </div>
              <nav className="woocommerce-pagination">
                <ul className="page-numbers">
                  <li>
                    <a className="previous page-numbers" href="#">
                      <i className="fas fa-angle-left"></i>
                    </a>
                  </li>

                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="next page-numbers" href="#">
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
}

export default FoodShop;

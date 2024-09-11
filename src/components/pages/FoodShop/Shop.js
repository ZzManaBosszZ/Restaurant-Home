import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { Link } from 'react-router-dom';
import BreadCrumb from "../../layouts/BreadCrumb";

function FoodShop() {
  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" }
  ];

  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Load foods and categories
  useEffect(() => {
    const loadFoodsAndCategories = async () => {
      try {
        const foodResponse = await api.get(url.FOOD.LIST);
        const categoryResponse = await api.get(url.CATEGORY.LIST);
        setFoods(foodResponse.data.data);
        setCategories(categoryResponse.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadFoodsAndCategories();
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

  // Handle sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Calculate paginated and sorted foods
  const getSortedAndFilteredFoods = () => {
    let filteredFoods = foods;

    // Filter by category
    if (selectedCategory !== "all") {
      filteredFoods = filteredFoods.filter(food => food.category === selectedCategory);
    }

    // Sort by option
    switch (sortOption) {
      case "priceAsc":
        filteredFoods.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filteredFoods.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filteredFoods;
  };

  const sortedAndFilteredFoods = getSortedAndFilteredFoods();
  const indexOfLastFood = currentPage * itemsPerPage;
  const indexOfFirstFood = indexOfLastFood - itemsPerPage;
  const currentFoods = sortedAndFilteredFoods.slice(indexOfFirstFood, indexOfLastFood);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedAndFilteredFoods.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <BreadCrumb title="Shop" path={breadcrumbPath} />

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
                <select name="sort" id="sort" value={sortOption} onChange={handleSortChange}>
                  <option value="default">Sort by Price</option>
                  <option value="priceAsc">Low to High</option>
                  <option value="priceDesc">High to Low</option>
                </select>

                <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content tab-content-info text-center" id="shop-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="grid-tab"
                  role="tabpanel"
                  aria-labelledby="grid-tab-control"
                >
                  <ul className="vt-products columns-4">
                    {currentFoods.map((food) => (
                      <li className="product" key={food.id}>
                        <div className="product-contents">
                          <div className="product-image">
                            <Link to={`/shop-detail/${food.id}`}>
                              <img src={food.image} alt={food.name} />
                            </Link>
                            <div className="shop-action">
                              <ul>
                                <li className="wishlist">
                                  <a href="#">
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
                              <Link to={`/shop-detail/${food.id}`}>{food.name}</Link>
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
                    <a
                      className="previous page-numbers"
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-angle-left"></i>
                    </a>
                  </li>
                  {pageNumbers.map(number => (
                    <li key={number}>
                      <a
                        className={`page-numbers ${currentPage === number ? 'current' : ''}`}
                        href="#"
                        onClick={() => handlePageChange(number)}
                      >
                        {number}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      className="next page-numbers"
                      href="#"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === pageNumbers.length}
                    >
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

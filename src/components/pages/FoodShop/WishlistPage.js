import LayoutPages from "../../layouts/LayoutPage";
import axios from "axios";
import HeaderPages from "../../layouts/HeaderPages";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { Link } from "react-router-dom";
import BreadCrumb from "../../layouts/BreadCrumb";
import { toast, ToastContainer } from "react-toastify";
import { getAccessToken } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Wishlist() {
  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/wishlist", label: "Wishlist" }
  ];

  const [foods, setFoods] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  // Load wishlist and foods
  useEffect(() => {
    const fetchWishlist = async () => {
      const token = Cookies.get("access_token");
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:8080/api/v1/wishlist",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          if (!response.ok) {
            toast.error("Không thể tải wishlist");
          } else {
            const data = await response.json();
            setWishlist(data.map((item) => item.foodId));
            loadFoods(data.map((item) => item.foodId));
          }
        } catch (error) {
          toast.error("Lỗi khi tải wishlist");
        }
      } else {
        toast.error("Token không hợp lệ hoặc không tồn tại");
      }
    };

    const loadFoods = async (wishlistFoodIds) => {
      try {
        const foodResponse = await api.get(url.FOOD.LIST);
        const foodsInWishlist = foodResponse.data.data.filter((food) =>
          wishlistFoodIds.includes(food.id)
        );
        setFoods(foodsInWishlist);
      } catch (error) {
        toast.error("Không thể tải danh sách món ăn");
      }
    };

    fetchWishlist();
  }, []);

  const getSortedAndFilteredFoods = () => {
    let filteredFoods = foods;

    if (selectedCategory !== "all") {
      filteredFoods = filteredFoods.filter(
        (food) => food.category === selectedCategory
      );
    }

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
  const currentFoods = sortedAndFilteredFoods.slice(
    indexOfFirstFood,
    indexOfLastFood
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(sortedAndFilteredFoods.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Hàm toggleWishlist
  const toggleWishlist = async (foodId) => {
    const token = Cookies.get("access_token");

    if (!token) {
      toast.error("Please log in to use this feature!");
      navigate("/login");
      return;
    }

    try {
      const isFoodInWishlist = wishlist.includes(foodId);

      if (isFoodInWishlist) {
        const wishlistItem = await fetch(
          `http://localhost:8080/api/v1/wishlist/food/${foodId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (wishlistItem.ok) {
          const item = await wishlistItem.json();
          const wishlistId = item.data[0]?.id;

          if (wishlistId) {
            const deleteResponse = await fetch(
              `http://localhost:8080/api/v1/wishlist/${wishlistId}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );

            if (deleteResponse.ok) {
              setWishlist(wishlist.filter((id) => id !== foodId));
              toast.error("Removed from wishlist");
              window.location.reload();
            } else {
              toast.error("Cannot be removed from wishlist");
            }
          }
        }
      } else {
        const addResponse = await fetch(
          "http://localhost:8080/api/v1/wishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ foodId })
          }
        );

        const addResponseBody = await addResponse.json();

        if (addResponse.ok) {
          setWishlist((prevWishlist) => [...prevWishlist, foodId]);
          toast.success("Added to wishlist!");
        } else {
          toast.error(
            `Cannot add to wishlist: ${
              addResponseBody.message || "Unknown error"
            }`
          );
        }
      }
    } catch (error) {
      // toast.error("Có lỗi xảy ra khi cập nhật wishlist");
    }
  };

  // Handle add to cart action
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleCartUpdate = (newCount) => {
    setCartQuantity(newCount);
  };

  const handleAddToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setTimeout(() => {
      toast.success("Item added to cart!");
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 2100);
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(totalQuantity);
  }, []);

  return (
    <LayoutPages showBreadCrumb={false}>
      <HeaderPages />
      <BreadCrumb title="Wishlist" path={breadcrumbPath} />

      <div className="validtheme-shop-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content tab-content-info text-center">
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
                                  <a
                                    href="#"
                                    onClick={() => toggleWishlist(food.id)}
                                    className={
                                      wishlist.includes(food.id) ? "active" : ""
                                    }
                                  >
                                    <span>Add to wishlist</span>
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
                              {/* <Link to={`/shop-detail/${food.id}`}> */}
                              {food.name}
                              {/* </Link> */}
                            </h4>
                            <div className="price">
                              <span>${food.price}</span>
                            </div>
                            <a
                              href="#"
                              className="cart-btn"
                              onClick={() => handleAddToCart(food)}
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
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
                  {pageNumbers.map((number) => (
                    <li key={number}>
                      <a
                        className={`page-numbers ${
                          currentPage === number ? "current" : ""
                        }`}
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

      <ToastContainer />
    </LayoutPages>
  );
}

export default Wishlist;

import React, { useState, useEffect } from 'react';
import LayoutPages from '../../layouts/LayoutPage';
import api from '../../../services/api';
import { getAccessToken } from '../../../utils/auth';
import url from '../../../services/url';

function Menu() {
    const [menuFoods, setMenuFoods] = useState([]);
    const [error, setError] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState('assets/img/banner/3.jpg'); 

    useEffect(() => {
        const loadMenuFoods = async () => {
            try {
                const response = await api.get(url.MENU_FOOD.LIST, 
                    // {headers: { Authorization: `Bearer ${getAccessToken()}` }}
                );
                setMenuFoods(response.data.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error("Error loading menu foods:", error);
                setError("Error loading menu foods. Please try again later.");
            }
        };

        loadMenuFoods();
    }, []);

    // Nhóm các món ăn theo menu.id
    const groupedFoods = {};
    menuFoods.forEach(menu => {
        const menuId = menu.menu.id;
        if (!groupedFoods[menuId]) {
            groupedFoods[menuId] = {
                name: menu.menu.name,
                foods: []
            };
        }
        groupedFoods[menuId].foods.push(...menu.food);
    });

    const menuIds = Object.keys(groupedFoods); 

    const handleTabChange = (menuId) => {
        // Cập nhật ảnh nền theo menuId
        switch (menuId) {
            case '1':
                setBackgroundImage('assets/img/banner/3.jpg');
                break;
            case '2':
                setBackgroundImage('assets/img/banner/4.jpg');
                break;
            case '3':
                setBackgroundImage('assets/img/banner/5.jpg');
                break;
            case '4':
                setBackgroundImage('assets/img/banner/6.jpg');
                break;
            default:
                setBackgroundImage('assets/img/banner/3.jpg');
        }
    };

    return (
        <LayoutPages>
            <div className="food-menu-area shape-less default-padding-top">
                <div className="container">
                    <div className="food-menu-items text-light">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="nav nav-tabs food-menu-nav style-three" id="nav-tab" role="tablist">
                                    {menuIds.map((menuId, index) => (
                                        <button
                                            key={menuId}
                                            className={`nav-link ${index === 0 ? 'active' : ''}`}
                                            id={`nav-id-${menuId}`}
                                            data-bs-toggle="tab"
                                            data-bs-target={`#tab${menuId}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={`tab${menuId}`}
                                            aria-selected={index === 0}
                                            onClick={() => handleTabChange(menuId)} // Gọi hàm khi chuyển tab
                                        >
                                            {groupedFoods[menuId].name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content food-menu-tab-content" id="nav-tabContent">
                                    {menuIds.map((menuId, index) => (
                                        <div
                                            key={menuId}
                                            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                            id={`tab${menuId}`}
                                            role="tabpanel"
                                            aria-labelledby={`nav-id-${menuId}`}
                                        >
                                            {groupedFoods[menuId].foods.length > 0 ? (
                                                <div className="row">
                                                    <div className="col-xl-5 thumb" style={{ background: `url(${backgroundImage})` }}>
                                                        <div className="discount-badge">
                                                            <strong>{menuId === '1' ? '15%' : menuId === '2' ? '10%' : menuId === '3' ? '20%' : '5%'}</strong> Discount
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7">
                                                        <div className="info">
                                                            <ul className="meal-items">
                                                                {groupedFoods[menuId].foods.map((food) => (
                                                                    <li key={food.id}>
                                                                        <div className="thumbnail">
                                                                            <img src={food.image} alt="Not Found" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <div className="top">
                                                                                <div className="title">
                                                                                    <h4>{food.name}</h4>
                                                                                </div>
                                                                                <div className="price">
                                                                                    <span>${food.price}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <p>{food.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p>No items available in this category.</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPages>
    );
}

export default Menu;
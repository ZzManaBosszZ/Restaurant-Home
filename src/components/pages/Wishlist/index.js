import React, { useState, useEffect } from 'react';
import LayoutPages from '../../layouts/LayoutPage';
import api from '../../../services/api';
import { getAccessToken } from '../../../utils/auth';
import url from '../../../services/url'; 
import "../../../public/css/wishlist.css";

function MyWishlist() {
    const [wishlist, setWishlist] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadWishlist = async () => {
            const token = getAccessToken();
            if (!token) {
                setError('No token found');
                return;
            }

            try {
                const response = await api.get(url.WISHLIST, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('API Response:', response.data.data);
                setWishlist(response.data.data); // Giả sử API trả về mảng danh sách yêu thích
            } catch (err) {
                setError('Error fetching wishlist: ' + err.message);
                console.error(err);
            }
        };

        loadWishlist();
    }, []);

    const handleDelete = async (id) => {
        const token = getAccessToken();
        if (!token) {
            setError('No token found');
            return;
        }

        try {
            await api.delete(`${url.WISHLIST}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setWishlist(wishlist.filter(item => item.id !== id)); 
        } catch (err) {
            setError('Error deleting wishlist: ' + err.message);
            console.error(err);
        }
    };

    return (
        <LayoutPages>
            <div className="wishlist-container">
                <div className="wishlist-header">
                    <h1>My Wishlist</h1>
                    {error && <p className="error">{error}</p>}
                </div>

                {wishlist.length > 0 ? (
                    <div className="wishlist-items">
                        {wishlist.map((item, index) => (
                            <div key={index} className="wishlist-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p>Price: ${item.price}</p>
                                    <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No items in your wishlist.</p>
                )}
            </div>
        </LayoutPages>
    );
}

export default MyWishlist;

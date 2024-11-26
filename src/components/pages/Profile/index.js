import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LayoutPages from '../../layouts/LayoutPage';
import api from '../../../services/api';
import { getAccessToken } from '../../../utils/auth';
import url from '../../../services/url'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của Toastify
import "../../../public/css/profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        fullName: '',
        email: '',
        phone: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const loadProfile = async () => {
            const token = getAccessToken();
            if (!token) {
                setError('No token found');
                return;
            }

            try {
                const response = await api.get(url.AUTH.PROFILE, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = response.data.data;
                setUser({
                    fullName: data.fullName,
                    email: data.email,
                    phone: data.phone,
                });

                setUpdatedUser({
                    fullName: data.fullName,
                    email: data.email,
                    phone: data.phone,
                });
            } catch (err) {
                setError('Error fetching user profile: ' + (err.response?.data?.message || err.message));
            }
        };

        loadProfile();
    }, []);

    const handleUpdate = async () => {
        const token = getAccessToken();
        if (!token) {
            setError('No token found');
            toast.error('No token found');
            return;
        }

        try {
            const response = await api.put(url.AUTH.UPDATE_PROFILE, updatedUser, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data.data);
            setEditing(false);

            // Hiển thị thông báo thành công
            toast.success('Profile updated successfully!');

            // Reload trang sau khi hiển thị thông báo
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message;
            setError('Error updating user profile: ' + errorMessage);
            toast.error('Error updating profile: ' + errorMessage);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const navigateToOrderHistory = () => {
        navigate('/order-history');
    };

    const navigateToWishlist = () => {
        navigate('/wishlist');
    };

    return (
        <LayoutPages>
            <div className="profile-container">
                <ToastContainer position="top-right" autoClose={3000} /> {/* Cấu hình Toastify */}
                <div className="profile-header">
    <h1>Profile</h1>
    {error && <p className="error">{error}</p>}
    {user ? (
        <p>Welcome, {user.fullName}!</p>
    ) : (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
        </div>
    )}
</div>


                {user && (
                    <div className="profile-info">
                        {editing ? (
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={updatedUser.fullName || ""}
                                    onChange={handleChange}
                                />
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={updatedUser.email || ""}
                                    onChange={handleChange}
                                />
                                <label>Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={updatedUser.phone || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        ) : (
                            <div>
                                <p><label>Name:</label> {user.fullName}</p>
                                <p><label>Email:</label> {user.email}</p>
                                <p><label>Phone:</label> {user.phone}</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="profile-buttons">
                    {editing ? (
                        <>
                            <button className="update" onClick={handleUpdate}>Save Changes</button>
                            <button className="cancel" onClick={() => setEditing(false)}>Cancel</button>
                        </>
                    ) : (
                        <button className="update" onClick={() => setEditing(true)}>Edit Info</button>
                    )}
                    <button className="order-history" onClick={navigateToOrderHistory}>Order History</button>
                    <button className="wishlist" onClick={navigateToWishlist}>My Wishlist</button>
                </div>
            </div>
        </LayoutPages>
    );
}

export default Profile;
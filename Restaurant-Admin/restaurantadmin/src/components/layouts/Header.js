import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { getAccessToken } from "../../utils/auth";
import config from "../../config";
function Header() {
    const [profile, setProfile] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    //show list data
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await api.get(url.AUTH.PROFILE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setProfile(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadProfile();
    }, []);

    useEffect(() => {
        const loadNotifications = async () => {
            try {
                const response = await api.get(url.NOTIFICATION.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setNotifications(response.data.data); // Giả sử dữ liệu trả về đúng cấu trúc
                setUnreadCount(notifications.filter(notification => !notification.isRead).length); // Đếm số lượng chưa đọc
            } catch (error) {
                console.error("Error loading notifications:", error);
            }
        };
        loadNotifications();
    }, []);

    // Xử lý khi người dùng nhấn vào thông báo
    const handleNotificationClick = (id) => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
        setUnreadCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Giảm số lượng chưa đọc nếu lớn hơn 0

        // Gọi API để cập nhật trạng thái "đã đọc" trên backend
        api.post(url.NOTIFICATION.MARK_AS_READ.replace("{}", id), { id }, {
            headers: { Authorization: `Bearer ${getAccessToken()}` }
        })
            .catch(error => console.error("Error updating notification status", error));
    };


    return (
        <header className="main-header">
            <div className="d-flex align-items-center logo-box justify-content-start">
                <a href="" className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary" data-toggle="push-menu" role="button">
                    <span className="icon-Align-left"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                </a>
                <a href="" className="logo">
                    <div className="logo-lg">
                        <span className="light-logo"><img src="../images/logo-dark-text.png" alt="logo" /></span>
                        <span className="dark-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
                    </div>
                </a>
            </div>
            <nav className="navbar navbar-static-top">
                <div className="app-menu">
                    <ul className="header-megamenu nav">
                        <li className="btn-group nav-item d-md-none">
                            <a href="#" className="waves-effect waves-light nav-link push-btn btn-info-light" data-toggle="push-menu" role="button">
                                <span className="icon-Align-left"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                            </a>
                        </li>
                        <li className="btn-group nav-item d-none d-xl-inline-block">
                            <div className="app-menu">
                                <div className="search-bx mx-5">
                                    <form>
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit" id="button-addon3"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-custom-menu r-side">
                    <ul className="nav navbar-nav">
                        <li className="btn-group nav-item d-lg-inline-flex d-none">

                        </li>
                        <li className="dropdown notifications-menu">
                            <span className="label label-danger">{unreadCount}</span>
                            <a href="#" className="waves-effect waves-light dropdown-toggle btn-danger-light" data-toggle="dropdown" title="Notifications">
                                <i className="icon-Notifications"><span className="path1"></span><span className="path2"></span></i>
                            </a>
                            <ul className="dropdown-menu animated bounceIn">
                                <li className="header">
                                    <div className="p-20">
                                        <div className="flexbox">
                                            <div>
                                                <h4 className="mb-0 mt-0">Notifications</h4>
                                            </div>
                                            <div>
                                                <a href="#" className="text-danger">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="menu sm-scrol">
                                        {notifications.map(notification => (
                                            <li key={notification.id}>
                                                <a href="#" onClick={() => handleNotificationClick(notification.id)}>
                                                    <i className={`fa ${notification.isRead ? 'fa-check text-muted' : 'fa-bell text-info'}`}></i> {notification.message}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all</a>
                                </li>
                            </ul>
                        </li>
                        
                        {/* <li className="btn-group nav-item">
                            <span className="label label-primary">5</span>
                            <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light nav-link full-screen btn-primary-light">
                                <i className="icon-Settings-2"></i>
                            </a>
                        </li> */}
                        <li className="btn-group nav-item d-xl-none d-inline-flex">
                            <a href="#" className="push-btn right-bar-btn waves-effect waves-light nav-link full-screen btn-info-light">
                                <span className="icon-Layout-left-panel-1"><span className="path1"></span><span className="path2"></span></span>
                            </a>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle p-0 text-dark hover-primary ml-md-30 ml-10" data-toggle="dropdown" title="User">
                                <span className="pl-30 d-md-inline-block d-none">Hello,</span> <strong className="d-md-inline-block d-none">{profile.fullName}</strong><img src="../images/avatar/avatar-15.png" className="user-image rounded-circle avatar bg-white mx-10" alt="User Image" />
                            </a>
                            <ul className="dropdown-menu animated flipInX">
                                <li className="user-body">
                                    {/* <a className="dropdown-item" href="#"><i className="ti-wallet text-muted mr-2"></i> My Wallet</a>
                                    <a className="dropdown-item" href={config.routes.profile}><i className="ti-settings text-muted mr-2"></i> Settings</a> */}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#"><i className="ti-lock text-muted mr-2"></i> Logout</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav >
        </header >
    );
}
export default Header;
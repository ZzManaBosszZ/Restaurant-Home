import { Link } from "react-router-dom";
import config from "../../config";

function SideBar() {
	return (
		<aside className="main-sidebar">
			<section className="sidebar position-relative">
				<div className="multinav">
					<div className="multinav-scroll" style={{ height: "100%" }}>
						<ul className="sidebar-menu" data-widget="tree">
							<li>
								<a href={config.routes.home}>
									<i className="icon-Home"></i>
									<span>Dashboard</span>
								</a>
							</li>
							<li className="treeview">
								<a href="#">
									<i className="icon-Clipboard-check">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
									</i>
									<span>Order</span>
									<span className="pull-right-container">
										<i className="fa fa-solid fa-angle-right"></i>
									</span>
								</a>
								<ul className="treeview-menu">
									<li>
										<a href={config.routes.order_list}>
											<i className="icon-Commit">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											Order List
										</a>
									</li>
									<li>
										<a href={config.routes.order_table_list}>
											<i className="icon-Commit">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											Order Table
										</a>
									</li>
								</ul>
							</li>
							<li className="treeview">
								<a href="#">
									<i className="icon-Dinner">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
										<span className="path5"></span>
									</i>
									<span>Menus</span>
									<span className="pull-right-container">
										<i className="fa fa-angle-right pull-right"></i>
									</span>
								</a>
								<ul className="treeview-menu">
									<li>
										<a href={config.routes.menu}>
											<i className="icon-Commit">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											Menu List
										</a>
									</li>
								</ul>
							</li>
							<li className="treeview">
								<a href="#">
									<i className="icon-Compilation">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
										<span className="path5"></span>
									</i>
									<span>Categories</span>
									<span className="pull-right-container">
										<i className="fa fa-angle-right pull-right"></i>
									</span>
								</a>
								<ul className="treeview-menu">
									<li>
										<a href={config.routes.category_list}>
											<i className="icon-Commit">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											Category List
										</a>
									</li>
								</ul>
							</li>
							<li className="treeview">
								<a href="#">
									<i className="icon-Group">
										<span className="path1"></span>
										<span className="path2"></span>
									</i>
									<span>User</span>
									<span className="pull-right-container">
										<i className="fa fa-angle-right pull-right"></i>
									</span>
								</a>
								<ul className="treeview-menu">
									<li>
										<a href={config.routes.user_management}>
											<i className="icon-Commit">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											User Management
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href={config.routes.food_list}>
									<i className="icon-Sushi">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
										<span className="path5"></span>
									</i>
									<span>Food</span>
								</a>
							</li>
						</ul>
						<div className="sidebar-widgets">
							<div className="mx-20 mb-25 pb-20 side-bx bg-primary bg-food-dark rounded20">
								<div className="text-center">
									<img src="../images/res-menu.png" className="sideimg" alt="" />
									<h3 className="title-bx">Add Menu</h3>
									<a href="#" className="text-white py-10 font-size-16 mb-0">
										Manage Your food and beverages menu
									</a>
								</div>
							</div>
							<div className="copyright text-left m-25">
								<p><strong className="d-block">Restran Admin Dashboard</strong> © 2024 All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</aside>
	);
}

export default SideBar;

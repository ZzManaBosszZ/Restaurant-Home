import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { getAccessToken } from "../../utils/auth";
import config from "../../config";

function RightSideBar() {

	const [currentYear, setCurrentYear] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");
    const [currentRevenueData, setCurrentRevenueData] = useState({ totalRevenue: 0, percentageGrowth: 0 });
	const [currentOrderData, setCurrentOrderData] = useState({ totalOrders: 0, percentageGrowth: 0 });

    // Function to get the current year and month
    const getCurrentDate = () => {
        const date = new Date();
        setCurrentYear(date.getFullYear());
        setCurrentMonth(date.getMonth() + 1); // Months are 0-indexed, so add 1
    };

    const loadData = async () => {
        try {
            const orderResponse = await api.get(url.DASHBOARD.TOTAL_ORDER_REVENUE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            const data = orderResponse.data.data;

            // Filter data for the current year and month
            const currentData = data.find(item => item.year === currentYear && item.month === currentMonth);
            setCurrentRevenueData(currentData || { totalRevenue: 0, percentageGrowth: 0 });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentDate();
        loadData();
    }, [currentYear, currentMonth]);

	const loadDataTotal = async () => {
        try {
            const orderResponse = await api.get(url.DASHBOARD.TOTAL_ORDER, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            const data = orderResponse.data.data;

            // Filter data for the current year and month
            const currentData = data.find(item => item.year === currentYear && item.month === currentMonth);
            setCurrentOrderData(currentData || { totalOrders: 0, percentageGrowth: 0 });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentDate();
        loadDataTotal();
    }, [currentYear, currentMonth]);

	return (
		<div className="right-bar">
			<div id="sidebarRight">
				<div className="right-bar-inner">
					<div className="text-end position-relative">
						<a href="#" className="d-inline-block d-xl-none btn right-bar-btn waves-effect waves-circle btn btn-circle btn-danger btn-sm">
							<i className="mdi mdi-close"></i>
						</a>
					</div>
					<div className="right-bar-content">
						<div className="box no-shadow box-bordered border-light">
							<div className="box-body">
								<div className="d-flex justify-content-between align-items-center">
									<div>
										<h5>Total Sale</h5>
										<h2 className="mb-0">$ {currentRevenueData.totalRevenue.toFixed(2)}</h2>
									</div>
									<div className="p-10">
										<div id="chart-spark1"></div>
									</div>
								</div>
							</div>
							<div className="box-footer">
								<div className="d-flex align-items-center justify-content-between">
									<h5 className="my-0">{currentOrderData.totalOrders} total orders</h5>
								</div>
							</div>
						</div>
						{/* <div className="box no-shadow box-bordered border-light">
							<div className="box-body">
								<div className="d-flex justify-content-between align-items-center">
									<div>
										<h5>Total Sessions</h5>
										<h2 className="mb-0">845</h2>
									</div>
									<div className="p-10">
										<div id="chart-spark2"></div>
									</div>
								</div>
							</div>
							<div className="box-footer">
								<div className="d-flex align-items-center justify-content-between">
									<a href="#" className="btn btn-primary-light btn-sm">Live</a>
									<a href="#" className="btn btn-info-light btn-sm">4 Visitors</a>
									<a href="#" className="btn btn-success-light btn-sm">See Live View</a>
								</div>
							</div>
						</div> */}
						{/* <div className="box no-shadow box-bordered border-light">
				  	  <div className="box-body">
					  	  <div className="d-flex justify-content-between align-items-center">
							  <div>
								  <h5>Customer rate</h5>
								  <h2 className="mb-0">5.12%</h2>
							  </div>
							  <div className="p-10">
							  	<div id="chart3"></div>
							  </div>
						  </div>
					  </div>
					  <div className="box-footer">
					  	  <div className="d-flex align-items-center justify-content-between">						  	  
							  <h5 className="my-0"><span className="badge badge-xl badge-dot badge-primary mr-10"></span>First Time</h5>								  	  
							  <h5 className="my-0"><span className="badge badge-xl badge-dot badge-danger mr-10"></span>Returning</h5>						  	  		
						  </div>
					  </div>
				  </div> */}
						{/* <div className="box no-shadow box-bordered border-light">
					  <div className="box-header">
					  	<h4 className="box-title">Resent Activity</h4>
					  </div>
				  	  <div className="box-body p-5">
					  	  <div className="media-list media-list-hover">
							<a className="media media-single mb-10 p-0 rounded-0" href="#">
							  <h4 className="w-50 text-gray font-weight-500">10:10</h4>
							  <div className="media-body pl-15 bl-5 rounded border-primary">
								<p>Morbi quis ex eu arcu auctor sagittis.</p>
								<span className="text-fade">by Johne</span>
							  </div>
							</a>

							<a className="media media-single mb-10 p-0 rounded-0" href="#">
							  <h4 className="w-50 text-gray font-weight-500">08:40</h4>
							  <div className="media-body pl-15 bl-5 rounded border-success">
								<p>Proin iaculis eros non odio ornare efficitur.</p>
								<span className="text-fade">by Amla</span>
							  </div>
							</a>

							<a className="media media-single mb-10 p-0 rounded-0" href="#">
							  <h4 className="w-50 text-gray font-weight-500">07:10</h4>
							  <div className="media-body pl-15 bl-5 rounded border-info">
								<p>In mattis mi ut posuere consectetur.</p>
								<span className="text-fade">by Josef</span>
							  </div>
							</a>

							<a className="media media-single mb-10 p-0 rounded-0" href="#">
							  <h4 className="w-50 text-gray font-weight-500">01:15</h4>
							  <div className="media-body pl-15 bl-5 rounded border-danger">
								<p>Morbi quis ex eu arcu auctor sagittis.</p>
								<span className="text-fade">by Rima</span>
							  </div>
							</a>

							<a className="media media-single mb-10 p-0 rounded-0" href="#">
							  <h4 className="w-50 text-gray font-weight-500">23:12</h4>
							  <div className="media-body pl-15 bl-5 rounded border-warning">
								<p>Morbi quis ex eu arcu auctor sagittis.</p>
								<span className="text-fade">by Alaxa</span>
							  </div>
							</a>

						  </div>
					  </div>
					  <div className="box-footer">
					  	  <div className="text-center">						  	  
							  <a href="#" className="mb-0">Load More</a>					  	  		
						  </div>
					  </div>
				  </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightSideBar;
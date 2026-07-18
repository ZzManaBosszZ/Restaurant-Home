import { useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function TotalOrderCancel() {
    const [currentYear, setCurrentYear] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");
    const [currentOrderData, setCurrentOrderData] = useState({ cancelledOrders: 0, percentageGrowth: 0 });

    // Function to get the current year and month
    const getCurrentDate = () => {
        const date = new Date();
        setCurrentYear(date.getFullYear());
        setCurrentMonth(date.getMonth() + 1); // Months are 0-indexed, so add 1
    };

    const loadData = async () => {
        try {
            const orderResponse = await api.get(url.DASHBOARD.TOTAL_ORDER_CANCEL, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            const data = orderResponse.data.data;

            // Filter data for the current year and month
            const currentData = data.find(item => item.year === currentYear && item.month === currentMonth);
            setCurrentOrderData(currentData || { cancelledOrders: 0, percentageGrowth: 0 });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentDate();
        loadData();
    }, [currentYear, currentMonth]);

    // Convert numeric month to full month name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[currentMonth - 1]; // Adjust for 0-based index

    return (
        <div className="col-xxxl-3 col-lg-6 col-12">
            <div className="box">
                <div className="box-body">
                    <div className="d-flex align-items-start">
                        <div>
                            <img src="../images/food/online-order-3.png" className="w-80 mr-20" alt="" />
                        </div>
                        <div>
                            <h2 className="my-0 font-weight-700">{currentOrderData.totalOrders}</h2>
                            <p className="text-fade mb-0">Total Canceled</p>
                            <p className="font-size-12 mb-0 text-primary">
                                <span className="badge badge-pill badge-primary-light mr-5">
                                    <i className="fa fa-arrow-down"></i>
                                </span>
                                {currentOrderData.percentageGrowth}% ({monthName} {currentYear})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalOrderCancel;

import React from 'react';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';

const DashboardStatistic = () => {
    const [dailyRevenueData, setDailyRevenueData] = useState([]);
    const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
    const [weeklyChange, setWeeklyChange] = useState(0);

    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };
            const [dailyRevenueResponse, monthlyRevenueResponse] = await Promise.all([
                api.get(url.DASHBOARD.DAILY_REVENUE, headerConfig),
                api.get(url.DASHBOARD.TOTAL_ORDER_REVENUE, headerConfig), // URL cho tổng doanh thu theo tháng
            ]);

            const dailyData = dailyRevenueResponse.data.data;
            setDailyRevenueData(dailyData);

            // Sắp xếp dữ liệu tháng theo thứ tự từ tháng 1 đến tháng 12
            const sortedMonthlyData = monthlyRevenueResponse.data.data.sort((a, b) => a.month - b.month);
            setMonthlyRevenueData(sortedMonthlyData);

            // Tính toán sự thay đổi hàng tuần
            calculateWeeklyChange(dailyData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Mảng chứa tên tháng
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Lọc những ngày có đơn (totalRevenue > 0) và chỉ lấy ít ngày (ví dụ: 15 ngày gần nhất)
    const filteredDailyRevenueData = dailyRevenueData.filter(item => item.totalRevenue > 0).slice(-15);

    const calculateWeeklyChange = (data) => {
        const now = new Date();
        const currentWeekStart = getStartOfWeek(now);
        const lastWeekStart = getStartOfWeek(new Date(now.setDate(now.getDate() - 7)));

        let currentWeekRevenue = 0;
        let lastWeekRevenue = 0;

        data.forEach(item => {
            const date = new Date(item.date);
            if (date >= currentWeekStart) {
                currentWeekRevenue += item.totalRevenue;
            } else if (date >= lastWeekStart) {
                lastWeekRevenue += item.totalRevenue;
            }
        });

        const change = lastWeekRevenue === 0 ? 0 : ((currentWeekRevenue - lastWeekRevenue) / lastWeekRevenue) * 100;
        setWeeklyChange(change.toFixed(2)); // Đặt tỷ lệ phần trăm thay đổi với hai chữ số thập phân
    };

    // Hàm để lấy ngày bắt đầu của tuần
    const getStartOfWeek = (date) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    };

    const dailyRevenueOptions = {
        chart: {
            type: 'line',
        },
        series: [{
            name: 'Revenue',
            data: filteredDailyRevenueData.map(item => item.totalRevenue), // Dữ liệu revenue cho những ngày có đơn
        }],
        xaxis: {
            categories: filteredDailyRevenueData.map(item => item.date), // Hiển thị ngày tháng cho những ngày có đơn
            title: {
                text: 'Date',
            }
        },
        yaxis: {
            title: {
                text: 'Revenue',
            }
        }
    };

    const monthlyRevenueOptions = {
        chart: {
            type: 'line',
        },
        series: [{
            name: 'Total Revenue',
            data: monthlyRevenueData.map(item => item.totalRevenue), // Dữ liệu revenue theo từng tháng
        }],
        xaxis: {
            categories: monthNames, // Hiển thị tên tháng
            title: {
                text: 'Month',
            }
        },
        yaxis: {
            title: {
                text: 'Revenue',
            }
        }
    };

    return (
        <>
            <div className="col-xxxl-7 col-xl-6 col-lg-6 col-12">
                <div className="box">
                    <div className="box-body">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h4 className="box-title mb-0">Daily Revenue</h4>
                                <p className="mb-0 text-mute">Lorem ipsum dolor</p>
                            </div>
                            <div className="text-right">
                                <h3 className="box-title mb-0 font-weight-700">${filteredDailyRevenueData.reduce((acc, curr) => acc + curr.totalRevenue, 0)}</h3>
                                <p className="mb-0">
                                    <span className={`text-${weeklyChange >= 0 ? 'success' : 'danger'}`}>
                                        {weeklyChange >= 0 ? '+' : '-'} {Math.abs(weeklyChange)}%
                                    </span> than last week
                                </p>
                            </div>
                        </div>
                        <div id="chart" className="mt-20">
                            <Chart options={dailyRevenueOptions} series={dailyRevenueOptions.series} type="line" height={352} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxxl-5 col-xl-6 col-lg-6 col-12">
                <div className="box">
                    <div className="box-body">
                        <h4 className="box-title">Total Revenue by Month</h4>
                        <div className="d-md-flex d-block justify-content-between">
                            <div>
                                <h3 className="mb-0 font-weight-700">${monthlyRevenueData.reduce((acc, curr) => acc + curr.totalRevenue, 0)}k</h3>
                                <p className="mb-0 text-primary"><small>Total Revenue</small></p>
                            </div>
                        </div>
                        <div id="yearly-comparison">
                            <Chart options={monthlyRevenueOptions} series={monthlyRevenueOptions.series} type="line" height={326} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardStatistic;

import React from 'react';
import Image from "next/image";
import {userChartData,productSoldChartData} from "@/Data/Charts/EcommerceChart";
import Chart from "react-apexcharts";
import Link from "next/link";

const ActiveUser = () => {
    return (
        <>
            <div className="col-md-6 col-lg-5 col-xxl-4">
                <div className="card active-user-card">
                    <div className="card-body">
                        <div className="">
                            <h5 className="text-dark">Active Users</h5>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <div className="active-user-content">
                                <h2 className="text-primary mb-0">50k</h2>
                                <p className="text-secondary text-nowrap mb-0">Page Views per Minutes</p>
                                <div className="app-divider-v dashed py-3"></div>
                                <p className="f-w-500">Today Users</p>
                                <div>
                                    <ul className="avatar-group justify-content-start">
                                        <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <Image width={31} height={31} src="/images/avtar/4.png" alt="avtar" className="img-fluid"/>
                                        </li>
                                        <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Eva Bailey">
                                            <Image width={31} height={31} src="/images/avtar/5.png" alt="avtar" className="img-fluid"/>
                                        </li>
                                        <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Michael Hughes">
                                            <Image width={31} height={31} src="/images/avtar/6.png" alt="avtar" className="img-fluid"/>
                                        </li>
                                        <li className="text-bg-secondary h-25 w-25 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="10 More">
                                            10+
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-primary flex-grow-1 user-chart-card">
                                <div className="card-body">
                                    <div className="active-users-chart">
                                        <Chart options={userChartData} series={userChartData.series} type="bar" height={160} width={300}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="active-users-content mt-3">
                            <div>
                                <h6 className="mb-0">4.78%</h6>
                                <p className="text-secondary mb-0">Monthly</p>
                            </div>
                            <div>
                                <h6 className="mb-0">82.90%</h6>
                                <p className="text-secondary mb-0">Weekly</p>
                            </div>
                            <div>
                                <h6 className="mb-0">80.0%</h6>
                                <p className="text-secondary mb-0">Yearly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-2 d-none d-xxl-block">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h6 className="header-title-text mb-0">Product Sold </h6>
                            <span><i className="ph-bold  ph-trend-down text-danger"></i></span>
                        </div>
                        <div>
                            <div id="productSold"></div>
                            <Chart options={productSoldChartData} series={productSoldChartData.series} type="bubble" height={220}/>
                            <div>
                                <Link href="/apps/e-shop/product-details" role="button"
                                   className="btn btn-success w-100">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActiveUser;
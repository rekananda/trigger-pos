import Chart from "react-apexcharts";
import {chartOptions3} from "@/Data/Charts/ApexChart";

const MonthlyCollection = ( ) => {
    return (
        <>
            <div className="col-sm-6 col-lg-3">
                <div className="card card-primary equal-card collection-card">
                    <div className="card-body p-0">
                        <div className="d-flex justify-content-between p-4">
                            <div>
                                <p className="header-heading f-s-16">Monthly Collection</p>
                            </div>
                            <div>
                                <span className="badge text-bg-success b-r-5">12.08%</span>
                            </div>
                        </div>
                        <div className="collection-card-content">
                            <div className="ms-4">
                                <p className="f-w-300 f-s-12 mb-0">Total This Month</p>
                                <h3 className="header-heading">$82,980</h3>
                            </div>
                            <div className="collection-chart">
                                <div id="collectionChart" style={{minHeight: '160px'}}>
                                    <Chart options={chartOptions3} series={chartOptions3.series} type="area"
                                           height={160}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonthlyCollection;

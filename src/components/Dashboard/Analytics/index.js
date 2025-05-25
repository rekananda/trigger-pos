"use client"
import {chartOptions1, chartOptions2} from "@/Data/Charts/ApexChart";
import CardGraph from "@/components/Dashboard/Analytics/CardGraph";
import Subscription from "@/components/Dashboard/Analytics/Subscription";
import MonthlyCollection from "@/components/Dashboard/Analytics/MonthlyCollection";
import Visitors from "@/components/Dashboard/Analytics/Visitors";
import Report from "@/components/Dashboard/Analytics/Report";

const Analytics = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Subscription />
                    <CardGraph
                        title="Users"
                        subtitle="Last Update at 2 Dec"
                        value="+89k"
                        icon="fa-solid fa-user"
                        iconColor="primary"
                        chartOptions={chartOptions1}
                        className="analytice-front-card"
                    />
                    <CardGraph
                        title="Earnings"
                        subtitle="Last Update at 2 Dec"
                        value="+$90"
                        icon="fa-solid fa-line-chart fa-fw"
                        chartOptions={chartOptions2}
                        iconColor="success"
                        className="analytice-front-card"
                    />
                    <MonthlyCollection />
                    <Visitors />
                    <Report />
                </div>
            </div>
        </>
    )
}

export default Analytics;

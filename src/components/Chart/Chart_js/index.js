"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row  } from "reactstrap";
import {Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Filler, ArcElement, Tooltip, Legend, Title, RadialLinearScale} from 'chart.js';
import {Bar, Line, Radar, Doughnut, PolarArea, Pie} from 'react-chartjs-2';
import {barBorderRadiusData, DoughnutData, LineChartData, MultiSeriesPie, PieData, PolarAreaData, ProgressiveLineData, RadarSkipPoints, SteppedLineCharts, verticalBarChart} from "@/Data/ChartJS";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale
);

const Blank = () => {



    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Chart Js" title="Chart" path={["Chart Js"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Row className=" chart-js-chart">
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Bar Chart Border Radius</h5>
                                </CardHeader>
                                <CardBody>
                                    <Bar data={barBorderRadiusData} options={barBorderRadiusData.options}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Vertical Bar Chart</h5>
                                </CardHeader>
                                <CardBody>
                                    <Bar data={verticalBarChart} options={verticalBarChart.options}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <div className="col-xl-6">
                            <Card>
                                <CardHeader>
                                    <h5>Multi Series Pie</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-center h-400">
                                        <Pie data={MultiSeriesPie} options={MultiSeriesPie.options}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Radar Skip Points</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-center h-400">
                                        <Radar data={RadarSkipPoints} options={RadarSkipPoints.options}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Doughnut</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-center h-400">
                                        <Doughnut data={DoughnutData}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Polar Area</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-center h-400">
                                        <PolarArea data={PolarAreaData}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Pie</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-center h-400">
                                        <Pie data={PieData}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <div className="col-xl-6">
                            <div className="card equal-card">
                                <CardHeader>
                                    <h5>Progressive Line</h5>
                                </CardHeader>
                                <CardBody>
                                    <Line data={ProgressiveLineData} options={ProgressiveLineData.options}/>
                                </CardBody>
                            </div>
                        </div>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Line Chart</h5>
                                </CardHeader>
                                <CardBody>
                                    <Line data={LineChartData} options={LineChartData.options}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h5>Stepped Line Charts</h5>
                                </CardHeader>
                                <CardBody>
                                    <Line data={SteppedLineCharts} options={SteppedLineCharts.options}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Blank;

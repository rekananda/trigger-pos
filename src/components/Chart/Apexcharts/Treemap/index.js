"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";


const TreemapChart = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Treemap" title="Chart" path={["Apexchart","Treemap"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Treemap Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.BasicTreemapData}
                                    type={'treemap'}
                                    height={350}
                                    options={{
                                        legend: {
                                            show: false
                                        },
                                        chart: {
                                            height: 350,
                                            type: 'treemap'
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        title: {
                                            text: ''
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <CardHeader>
                                <h5> Multi-Dimensional Treemap Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.MultiDimensionalTreemap}
                                    type={'treemap'}
                                    height={350}
                                    options={{
                                        legend: {
                                            show: false
                                        },
                                        chart: {
                                            height: 350,
                                            type: 'treemap'
                                        },
                                        colors: [getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34'],
                                        title: {
                                            text: '',
                                            align: 'center'
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <CardHeader>
                                <h5> Distributed Treemap Chart (set color for each cell)</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.DistributedTreemapData}
                                    type={'treemap'}
                                    height={350}
                                    options={{
                                        legend: {
                                            show: false
                                        },
                                        chart: {
                                            height: 350,
                                            type: 'treemap'
                                        },
                                        title: {
                                            text: '',
                                            align: 'center'
                                        },
                                        colors: [
                                            getLocalStorageItem('color-primary', '#48BECE'),
                                            getLocalStorageItem('color-secondary', '#8B8476'),
                                            '#AECC34',
                                            '#FF5E40',
                                            '#F9D249',
                                            '#535AE7',
                                            '#E5E3E0',
                                            '#48443D',
                                        ],
                                        plotOptions: {
                                            treemap: {
                                                distributed: true,
                                                enableShades: false
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <CardHeader>
                                <h5> Treemap Chart with Color ranges</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.ColorRangeTreemap}
                                    type={'treemap'}
                                    height={350}
                                    options={{
                                        legend: {
                                            show: false
                                        },
                                        chart: {
                                            height: 350,
                                            type: 'treemap'
                                        },
                                        title: {
                                            text: ''
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            style: {
                                                fontSize: '12px',
                                            },
                                            formatter: function(text, op) {
                                                return [text, op.value]
                                            },
                                            offsetY: -4
                                        },
                                        plotOptions: {
                                            treemap: {
                                                enableShades: true,
                                                shadeIntensity: 0.5,
                                                reverseNegativeShade: true,
                                                colorScale: {
                                                    ranges: [
                                                        {
                                                            from: -6,
                                                            to: 0,
                                                            color: '#48443D'
                                                        },
                                                        {
                                                            from: 0.001,
                                                            to: 6,
                                                            color: getLocalStorageItem('color-primary','#48BECE')
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TreemapChart;

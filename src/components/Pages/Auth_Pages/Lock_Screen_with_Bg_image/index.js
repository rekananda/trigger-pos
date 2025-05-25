import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Link from "next/link";


const LockScreenBg = () => {
    return (
        <>
            <Container fluid>

                <Row>
                    <Col xs={12} className="p-0">
                        <div className="login-form-container">
                            <div className="mb-4">
                                <Link  className="logo d-inline-block" href="/">
                                    <img src="/images/logo/1.png" className="w-250" alt="logo"/>
                                </Link>
                            </div>
                            <div className="form_container">
                                <form className="app-form p-3">
                                    <div className="row">
                                        <Col xs={12}>
                                            <div className="mb-3 text-center">
                                                <h3>Lock Screen</h3>
                                                <p>Hello enter your password to unlock the screen</p>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="user-container mb-3">
                                                <div
                                                    className="h-80 w-80 d-flex-center b-r-16 overflow-hidden text-bg-primary">
                                                    <img src="/images/ai_avtar/3.jpg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                                <h5 className="f-w-600">Sunny Airey</h5>
                                                <p className="text-secondary">Enter Your Password to View your Screen
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" className="form-control"
                                                       placeholder="Enter Your Password" id="password" required=""/>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="invalidCheck" required=""/>
                                                <label className="form-check-label" htmlFor="invalidCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="mb-3">
                                                <Link href="/" role="button"
                                                   className="btn btn-primary w-100">Unlock</Link>
                                            </div>
                                        </Col>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LockScreenBg;
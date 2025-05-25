import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Link from "next/link";


const SignUpBg = () => {
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
                                    <div className="mb-3 text-center">
                                        <h3>Create Account</h3>
                                        <p className="f-s-12 text-secondary">Get started For Free Today.</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Username"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control"
                                               placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="formCheck1"/>
                                        <label className="form-check-label" htmlFor="formCheck1">remember me</label>
                                    </div>
                                    <div>
                                        <Link href="/" role="button"
                                           className="btn btn-primary w-100">Submit</Link>
                                    </div>
                                    <div className="app-divider-v justify-content-center">
                                        <p>OR</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-facebook text-white"></i></button>
                                            <button type="button" className="btn btn-danger icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-google text-white"></i></button>
                                            <button type="button" className="btn btn-dark icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-github text-white"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link href="/admin-pages/other_pages/terms_condition"
                                           className="text-secondary text-decoration-underline">Terms of
                                            use &amp; Conditions</Link>
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

export default SignUpBg;
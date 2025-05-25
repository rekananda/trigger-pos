import React from 'react';
import { Col, Container, Row} from "reactstrap";
import Link from "next/link";

const PasswordCreate = () => {
    return (
        <div className="sign-in-bg">
            <div className="app-wrapper d-block">
                <div className="main-container">
                    <Container>
                        <Row className="sign-in-content-bg">
                            <Col lg={6} className="image-contentbox d-none d-lg-block">
                                <div className="form-container">
                                    <div className="signup-content mt-4">
                    <span>
                      <img src="/images/logo/1.png" alt="" className="img-fluid "/>
                    </span>
                                    </div>
                                    <div className="signup-bg-img">
                                        <img src="/images/login/05.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="form-contentbox">
                                <div className="form-container">
                                    <form className="app-form">
                                        <Row>
                                            <Col xs={12}>
                                                <div className="mb-5 text-center text-lg-start">
                                                    <h2 className="text-primary f-w-600">Create Password</h2>
                                                    <p>Your new password must be different from previous used
                                                        password</p>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">current
                                                        password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password"
                                                           id="password"/>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">New
                                                        Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password"
                                                           id="password1"/>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password"
                                                           id="password2"/>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Link href="/admin-pages/auth_pages/sign_in" role="button"
                                                       className="btn btn-primary w-100">Create
                                                        Password</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default PasswordCreate;
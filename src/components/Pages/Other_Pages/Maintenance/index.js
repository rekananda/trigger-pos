import React from 'react';
import { Col, Container, Row} from "reactstrap";
import Link from "next/link";

const Maintenance = () => {
    return (
        <>
            <div className="bg-dark maintenance py-5">
                <Container>
                    <Row>
                        <div className="overlay-maintenance-card">
                            <Col md={5}>
                                <h1 className="text-warning"> We are <br/>under Maintenance</h1>

                                <p className="text-white">Someone has kidnapped our site. We are negotiation ransom and
                                    will resolve this issue in 24/7 hours</p>

                                <Link href="/" role="button" className="btn btn-lg btn-warning mt-3">
                                    <i className="ti ti-home"></i>
                                    Back To Home </Link>

                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Maintenance;

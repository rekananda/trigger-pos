import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";


const Index = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle=" Privacy Policy" title="Other Pages" path={[" Privacy Policy"]} icon={<i className="ph-duotone  ph-newspaper f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardBody>
                                <h5 className="text-primary mt-3"><i className="ti ti-north-star text-primary me-2"></i> What
                                    Information do we collect from you?</h5>
                                <div className="mt-4">
                                    <p className="text-dark f-s-16 mt-3">
                                        <i className="ti ti-corner-down-right-double text-primary me-2"></i>
                                        Ra-admin Store ("Company") is committed to safeguarding your privacy. This
                                        Privacy Policy applies to information we collect on our website located at
                                        gragertsgrocerystore.com (the "Website") our SMS text messaging program and
                                        third party text message service (the "SMS Service") our digital coupon service
                                        (the "Digital Coupon Program") our customer loyalty program (the "Loyalty
                                        Program") and our mobile shopping app (the "Ra-Admin"). In this Privacy Policy,
                                        we refer to the Website, the SMS Service, the Digital Coupon Program, the
                                        Loyalty Program and theRa-admin together as the "Services".
                                    </p>
                                    <p className="text-dark f-s-16 mt-3">
                                        <i className="ti ti-corner-down-right-double text-primary me-2"></i>
                                        We use this Privacy Policy to clearly disclose to you our privacy practices in a
                                        manner that is easy to understand. If there is something you do not understand
                                        about our privacy practices, please feel free to contact us at the contact
                                        information at the bottom of this Privacy Policy.
                                    </p>
                                    <p className="text-dark f-s-16 mt-3">
                                        <i className="ti ti-corner-down-right-double text-primary me-2"></i>
                                        We may change this policy from time to time so please check back often. If we
                                        significantly change our collection, use, or disclosure practices, we will try
                                        to send you a notice via email if you have provided us with an email address.
                                        Please keep in mind that some of the services mentioned specifically in this
                                        policy may not be available on the site at this time
                                    </p>
                                    <p className="mt-3 text-dark f-s-16"><i
                                        className="ti ti-corner-down-right-double text-primary me-2"></i> We collect
                                        information in several ways. Some of the information we collect is personal to
                                        you. Other information is anonymous. We collect the following categories of
                                        information:</p>
                                    <ul className="px-5 py-3">
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> During
                                            registration on the Website or theRa-admin, we ask for your name and email
                                            address
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            sign up for digital coupons, we ask for your mobile phone number
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            edit your profile on the Website or theRa-admin or sign up for our loyalty
                                            program, we collect your mailing address and birthdate.
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            report a problem with our site or services we will collect contact
                                            information along with a description of your problem
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            contact us via the company email address or the "Contact" link, we will
                                            collect your name and email address and any information you provide in the
                                            email or message field
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary">When you
                                            use our Meal Planner feature, we will save your meal plans for your
                                            convenience to use when you log into your account.
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            complete a store survey, we collect your name, email address, location and
                                            information about your grocery shopping preferences.
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary"> When you
                                            fill out an employment application downloaded from our website, we collect
                                            employment information, employment history, and education information.
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary">To
                                            customize our service for you, we and our partners may collect precise
                                            location data, including the real-time geographic location of your computer
                                            or device. This location data is collected anonymously in a form that does
                                            not personally identify you. We may obtain your consent on your first use of
                                            the service. On theRa-admin, for example, we will use your location to
                                            associate you with our nearest store to you. You can change your preferences
                                            in your profile.
                                        </li>
                                        <li className="diamond diamond-bullet-secondary f-s-14 text-secondary">When you
                                            visit and navigate our site, use our applications or third party sites, or
                                            open our emails, we may collect technical information about your use of our
                                            site including IP address, device identifier, the type of browser you use,
                                            the files you request and the domain name and country from which you request
                                            information.
                                        </li>
                                    </ul>
                                    <h5 className="text-primary mt-3"><i className="ti ti-north-star text-primary me-2"></i> How
                                        do we collect information from you?</h5>
                                    <p className="text-dark f-s-16 corner-arrow mt-3">
                                        <i className="ti ti-corner-down-right-double text-primary me-2"></i>
                                        We collect much of the information listed above directly from you when you
                                        submit it on our Website or in theRa-admin. This includes information such as
                                        registration information, contact information, and information used in our
                                        digital coupon and loyalty programs. If you do not want to share your
                                        information, you can choose not to participate in a particular service or
                                        activity.
                                    </p>
                                    <p className="text-primary text-end f-w-600 text-d-underline">Last update: 11 Sep,
                                        2024</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
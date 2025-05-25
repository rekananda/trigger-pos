"use client"
import EcommerceCard from "@/components/Dashboard/Ecommerce/EcommerceCard";
import ActiveUser from "@/components/Dashboard/Ecommerce/ActiveUser";
import ProductsCards from "@/components/Dashboard/Ecommerce/ProductsCards";
import CustomersCards from "@/components/Dashboard/Ecommerce/CustomersCards";
import OrdersCards from "@/components/Dashboard/Ecommerce/OrdersCards";
import {Modal, ModalBody, Button} from 'reactstrap';
import {useState} from "react";


const Ecommerce = () => {

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <EcommerceCard/>
                    <ActiveUser/>
                    <ProductsCards/>
                    <CustomersCards/>
                    <OrdersCards/>
                </div>
            </div>

            <Modal className="welcome-modals" isOpen={modal} toggle={toggle} backdrop="static" centered>
                <ModalBody className="p-0">
                    <div className="welcome-card">
                        <div className="text-center position-relative welcome-card-content z-1 p-3">
                            <div className="text-end">
                                <i
                                    className="ti ti-x fs-5 text-dark f-w-600"
                                    style={{cursor: 'pointer'}}
                                    onClick={toggle}
                                ></i>
                            </div>
                            <h2 className="f-w-600">
                                <span>Welcome !</span> 👋
                            </h2>
                            <h6 className="f-s-15 text-dark f-w-500 mx-0 mx-sm-5">
                                Start Multipurpose, clean modern responsive bootstrap 5 admin
                                template
                            </h6>
                            <div>
                                <img
                                    src="/images/modals/welcome-1.png"
                                    alt="Welcome"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="mt-3 mb-4">
                                <Button color="primary" className="btn-lg text-white" onClick={toggle}>
                                    Let's Get Started <i className="ti ti-chevrons-right"></i>
                                </Button>
                            </div>
                        </div>
                    </div>

                </ModalBody>

            </Modal>
        </>
    )
}

export default Ecommerce;

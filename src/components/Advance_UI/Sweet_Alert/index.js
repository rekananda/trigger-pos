"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Button} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import Swal from 'sweetalert2';



const SweetAlerts = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Sweetalert" title="Advance UI" path={["Sweetalert"]} icon={<i className="ph-duotone  ph-briefcase-metal f-s-16"></i>}/>

                <Row >
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Basic Example</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_1</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button color='primary' type="button" className="btn btn-primary btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: 'Any Fool Can Use a Computer',
                                        customClass: {
                                            confirmButton: 'btn btn-primary',
                                        },
                                        buttonsStyling: false
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>A title with a text under</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_2</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-secondary btn-md"  onClick={() => {
                                    Swal.fire(
                                        'The Internet?',
                                        'That thing is still around?',
                                        'question'
                                    )
                                }}
                                >
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>A success message!</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_3</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-success btn-md"  onClick={() => {
                                    Swal.fire(
                                        'Good job!',
                                        'You clicked the button!',
                                        'success'
                                    )
                                }}
                                >
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>A custom positioned dialog</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_4</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-warning btn-md"  onClick={() => {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Custom animation</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_5</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-info btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: 'Custom animation with Animate.css',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>A message with custom Image Header</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_6</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-danger btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: "Sweet!",
                                        text: "Modal with a custom image.",
                                        imageUrl: "../assets/images/blog/21.jpg",
                                        imageWidth: 400,
                                        imageHeight: 400,
                                        imageAlt: "Custom image"
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Ajax request example</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_7</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-light btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: 'Submit your Github username',
                                        input: 'text',
                                        inputAttributes: {
                                            autocapitalize: 'off'
                                        },
                                        showCancelButton: true,
                                        confirmButtonText: 'Look up',
                                        showLoaderOnConfirm: true,
                                        preConfirm: (login) => {
                                            return fetch(`//api.github.com/users/${login}`)
                                                .then(response => {
                                                    if (!response.ok) {
                                                        throw new Error(response.statusText)
                                                    }
                                                    return response.json()
                                                })
                                                .catch(error => {
                                                    Swal.showValidationMessage(
                                                        `Request failed: ${error}`
                                                    )
                                                })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: `${result.value.login}'s avatar`,
                                                imageUrl: result.value.avatar_url
                                            })
                                        }
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> modals (queue) example</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_8</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-dark btn-md" onClick={() => {
                                    Swal.fire({
                                        title: 'How old are you?',
                                        icon: 'question',
                                        input: 'range',
                                        inputLabel: 'Your age',
                                        inputAttributes: {
                                            min: 8,
                                            max: 120,
                                            step: 1
                                        },
                                        inputValue: 25
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>A message with auto close timer</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_9</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-info btn-md"  onClick={() => {
                                    let timerInterval
                                    Swal.fire({
                                        title: 'Auto close alert!',
                                        html: 'I will close in <b></b> milliseconds.',
                                        timer: 2000,
                                        timerProgressBar: true,
                                        didOpen: () => {
                                            Swal.showLoading()
                                            const b = Swal.getHtmlContainer().querySelector('b')
                                            timerInterval = setInterval(() => {
                                                b.textContent = Swal.getTimerLeft()
                                            }, 100)
                                        },
                                        willClose: () => {
                                            clearInterval(timerInterval)
                                        }
                                    }).then((result) => {
                                        /* Read more about handling dismissals below */
                                        if (result.dismiss === Swal.DismissReason.timer) {
                                            console.log('I was closed by the timer')
                                        }
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Custom HTML description and buttons</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_10</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-success btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: "<strong>Welcome</strong>",
                                        html: `
                                                                  Start Multipurpose, clean modern responsive bootstrap 5 admin template
                                                                  `,
                                        showCloseButton: true,
                                        showCancelButton: true,
                                        focusConfirm: false,
                                        confirmButtonText: `
                                                                    <i class="fa fa-thumbs-up"></i> Great!
                                                                  `,
                                        confirmButtonAriaLabel: "Thumbs up, great!",
                                        cancelButtonText: `
                                                                    <i class="fa fa-thumbs-down"></i>
                                                                  `,
                                        cancelButtonAriaLabel: "Thumbs down"
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Confirmation With Triggers</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_11</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-secondary btn-md"
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You won't be able to revert this!",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Yes, delete it!'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    Swal.fire(
                                                        'Deleted!',
                                                        'Your file has been deleted.',
                                                        'success'
                                                    )
                                                }
                                            })
                                        }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Confirmation With Approvals</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_12</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-danger btn-md"   onClick={() => {
                                    const swalWithBootstrapButtons = Swal.mixin({
                                        customClass: {
                                            confirmButton: 'btn btn-primary ms-2',
                                            cancelButton: 'btn btn-danger'
                                        },
                                        buttonsStyling: false
                                    })

                                    swalWithBootstrapButtons.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes, delete it!',
                                        cancelButtonText: 'No, cancel!',
                                        reverseButtons: true
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            swalWithBootstrapButtons.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                            )
                                        } else if (
                                            /* Read more about handling dismissals below */
                                            result.dismiss === Swal.DismissReason.cancel
                                        ) {
                                            swalWithBootstrapButtons.fire(
                                                'Cancelled',
                                                'Your imaginary file is safe :)',
                                                'error'
                                            )
                                        }
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Custom width, padding and background</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_13</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-primary btn-md"  onClick={() => {
                                    Swal.fire({
                                        title: 'Sweet!',
                                        text: 'Custom width, padding, background..',
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Dynamic queue example</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_14</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-warning btn-md" onClick={() => {
                                    (async () => {

                                        const ipAPI = '//api.ipify.org?format=json'

                                        const inputValue = fetch(ipAPI)
                                            .then(response => response.json())
                                            .then(data => data.ip)

                                        const {
                                            value: ipAddress
                                        } = await Swal.fire({
                                            title: 'Enter your IP address',
                                            input: 'text',
                                            inputLabel: 'Your IP address',
                                            inputValue: inputValue,
                                            showCancelButton: true,
                                            inputValidator: (value) => {
                                                if (!value) {
                                                    return 'You need to write something!'
                                                }
                                            }
                                        })

                                        if (ipAddress) {
                                            Swal.fire(`Your IP address is ${ipAddress}`)
                                        }

                                    })()
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Dismiss Alert</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_15</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-light btn-md"  onClick={() => {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Something went wrong!',
                                        footer: '<a href="">Why do I have this issue?</a>'
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Mixin example</h5>
                                <p className="mb-0 text-secondary">if you want to keep this sweet alert then you can
                                    keep it using <span className="text-danger">click_16</span></p>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-dark btn-md"  onClick={() => {
                                    const Toast = Swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                    })

                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Signed in successfully'
                                    })
                                }}>
                                    Click Now
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SweetAlerts;

import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import swal from 'sweetalert';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("xbjwraye");
    if (state.succeeded) {
        const form = document.getElementById("contact-form");
        form.reset();
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: null,
        });
    }
    return (
        <div id="contact" className="contact-me container-sm mb-5">
            <div className="header-details">
                <h1>Contact's</h1>
                <h2>Get In Touch</h2>
            </div>
            <form id="contact-form container" onSubmit={handleSubmit}>
                <Row md={2} xs={1} >
                    <Col>
                        <Form.Floating className="w-100 mb-3">
                            <Form.Control
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="rounded-0 w-100"
                            />
                            <label htmlFor="name">Name</label>
                        </Form.Floating>
                    </Col>

                    <Col>
                        <Form.Floating className="w-100 mb-3">
                            <Form.Control
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                                className="rounded-0 w-100"
                            />
                            <label htmlFor="email">Email</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Form.Floating className="w-100 mb-3">
                    <Form.Control
                        id="message"
                        as="textarea"
                        name="message"
                        required
                        placeholder="Message"
                        className="rounded-0"
                        style={{ height: '100px' }}
                    />
                    <label htmlFor="message">Message</label>
                </Form.Floating>
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="btn text-center w-25 btn-warning">SUBMIT</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
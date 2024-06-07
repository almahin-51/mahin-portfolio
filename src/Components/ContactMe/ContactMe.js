import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import swal from 'sweetalert';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("xbjwraye");
    const form = document.getElementById("contact-form");

    if (state.succeeded) {
        swal({
            title: "Submitted!",
            text: "Thanks for Contacting me, I will mail you back as soon as possible.",
            icon: "success",
            button: "Close"
        });

        form.reset();
    }
    return (
        <div id="contact" className="contact-me container-sm mb-5">
            <div className="header-details">
                <h1>Contact's</h1>
                <h2>Get In Touch</h2>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={state.submitting} className="btn text-center w-25 btn-warning">SUBMIT</button>
                </div>
            </form >
        </div >
    );
};

export default ContactMe;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CountUp } from 'react-countup';

const About = () => {
    return (
        <div id="about" className="px-5">
            <div className="header-details">
                <h1>ABOUT ME</h1>
                <h2>Know Me More</h2>
            </div>
            <Row>
                <Col lg={7}>
                    <div className="about-details">
                        <h2>I'm <span>Mahin,</span> a Junior Web Developer</h2>
                        <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                </Col>
                <Col lg={5} >
                    <div className="info">
                        <ul>
                            <li><span>Name:</span> MD. AL Mohaiminul Islam Mahin</li>
                            <li><span>Email:</span> <a href="mailto:almohaiminul@gmail.com">almohaiminul1@gmail.com</a></li>
                            <li><span>Age:</span> 17</li>
                            <li><span>From:</span> Rangpur, Bangladesh</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp> */}
                    {/* <CountUp end={100} /> */}
                    {/* <CountUp
                        start={-875.039}
                        end={160527.012}
                        duration={2.75}
                        separator=" "
                        decimals={4}
                        decimal=","
                        prefix="EUR "
                        suffix=" left"
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp> */}
                </Col>
            </Row>
        </div>
    );
};

export default About;
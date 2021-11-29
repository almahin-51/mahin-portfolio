import React from 'react';
import Typed from 'react-typed';

const HomeBanner = () => {
    return (
        <>
            <div id="banner" className="banner pb-5 mb-5">
                <div className="banner-details">
                    <h2>Welcome</h2>

                    <h1><Typed
                        strings={[
                            "I'm Mahin.",
                            "I'm a MERN Stack Developer.",
                            "I'm a Web Designer."
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    /></h1>
                    <p>You can reach out to me if you need any help in making a <br /> website for you or your business.</p>
                    <a href="#contact"><button className="btn btn-outline-warning me-3" >Contact Me</button></a>
                    <a target="_blank" href="https://drive.google.com/file/d/1sQKr6iQQuPgUfI61mC63l8GsDZFH0Lbg/view?usp=sharing"><button className="btn btn-warning">Resume</button></a>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;
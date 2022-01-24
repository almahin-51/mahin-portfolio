import React, { useEffect, useState } from "react";
import { Carousel, Col, Modal, Row } from "react-bootstrap";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("./fakeDB.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  const handleViewDetails = (projectData) => {
    setDetails(projectData);
    setShow(true);
  };
  const { img, name, info, features, technologies, date, link } = details;

  return (
    <div className="projects" id="projects">
      <div className="header-details">
        <h1>PROJECT'S</h1>
        <h2>My Work</h2>
      </div>
      <Row className="w-100 g-0">
        {project.map((pro) => (
          <Col md={4} sm={6} xm={1} key={pro.id} className="p-0 mt-4">
            <div className="card">
              <div className="portfolio-img">
                <img src={pro.full} alt="" />
              </div>
              <div className="project-card">
                <h2>{pro.name}</h2>
                <p>{pro.des}</p>
              </div>
              <div className="card-footer">
                <a href={pro?.link?.live}>View</a>
                <button
                  onClick={() => handleViewDetails(pro)}
                  className="project-btn"
                >
                  Details
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal  */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w h-100"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="h-100">
            <Col className="h-100" xm={12} md={8}>
              <Carousel fade className="h-100">
                {details?.img &&
                  Object.keys(img).map((image) => (
                    <Carousel.Item className="h-100">
                      <img
                        className="d-block w-100"
                        src={img[image]}
                        alt={image}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
            <Col md={4} xm={12}>
              <h4>Project Info:</h4>
              <p>{info}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;

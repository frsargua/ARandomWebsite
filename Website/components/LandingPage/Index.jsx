import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Carousel,
  Card,
} from "react-bootstrap";
import {
  BsFillLightningFill,
  BsStarFill,
  BsTools,
  BsPeopleFill,
  BsBuilding,
} from "react-icons/bs"; // Import Bootstrap icons

import "./LandingPage.css"; // Import custom styles

const LandingPage = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      review:
        "I'm really impressed with the service. My house is now sparkling clean. Thank you Clean & Shine!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      review:
        "Great service! The cleaners were professional and really friendly. Will definitely use again.",
    },
    {
      name: "Emma Brown",
      rating: 5,
      review:
        "Absolutely fantastic cleaning service. They did a thorough job and I couldn't be happier.",
    },
  ];
  const services = [
    {
      icon: <BsFillLightningFill size={70} />,
      title: "General Cleaning",
      description:
        "Thorough cleaning of all rooms, including dusting, vacuuming, and mopping.",
    },
    {
      icon: <BsFillLightningFill size={70} />,
      title: "Disinfection Services",
      description:
        "Sanitization and disinfection of surfaces to ensure a clean and germ-free environment.",
    },
    {
      icon: <BsFillLightningFill size={70} />,
      title: "Window Cleaning",
      description:
        "Professional cleaning of windows, leaving them streak-free and crystal clear.",
    },
    {
      icon: <BsFillLightningFill size={70} />,
      title: "Deep Cleaning",
      description:
        "Thorough and detailed cleaning of hard-to-reach areas, ensuring a spotless home.",
    },
    {
      icon: <BsFillLightningFill size={70} />,
      title: "Trash Removal",
      description:
        "Proper disposal of trash and waste, maintaining cleanliness and hygiene.",
    },
    {
      icon: <BsFillLightningFill size={70} />,
      title: "Trash Removal",
      description:
        "Proper disposal of trash and waste, maintaining cleanliness and hygiene.",
    },
  ];

  const pricingTable = [
    { frequency: "Weekly", pricing: "$13" },
    { frequency: "Fortnightly", pricing: "$14" },
    { frequency: "Monthly", pricing: "$15" },
    { frequency: "One-off", pricing: "Call Us" },
  ];

  return (
    <Container className="landing-page-container">
      <Row className="header">
        <Col>
          <h1>Welcome to Clean & Shine</h1>
          <p>Your trusted cleaning service provider</p>
          <Button variant="primary" size="lg">
            Book Now
          </Button>
        </Col>
      </Row>
      <Row className="icons">
        <Col md={2}>
          <BsFillLightningFill size={70} />
        </Col>
        <Col md={2}>
          <BsStarFill size={70} />
        </Col>
        <Col md={2}>
          <BsTools size={70} />
        </Col>
        <Col md={2}>
          <BsPeopleFill size={70} />
        </Col>
        <Col md={2}>
          <BsBuilding size={70} />
        </Col>
      </Row>
      <Row className="section">
        <Col>
          <h2>What house cleaning services do we provide?</h2>
          <p>
            Our professional cleaning team offers a range of domestic cleaning
            services to cater to your specific needs:
          </p>
          <ul className="services-list">
            {services.map((service, index) => (
              <li key={index}>
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="section">
        <Col>
          <h2>Why Choose Clean & Shine?</h2>
        </Col>
      </Row>
      <Row className="features">
        <Col md={12}>
          <div className="feature row">
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <i className="fas fa-clock"></i>
              <h3>Convenient Scheduling</h3>
              <p>
                We offer flexible scheduling options to suit your needs. Book
                our services at your convenience.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src="https://belloscleaning.com/wp-content/uploads/2022/03/easy-cleaning-routines-Bellos-Cleaning.jpg"
                className="img-fluid"
                alt="Cleaning"
              />
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="feature row">
            <div className="col-md-5">
              <img
                src="https://img.grouponcdn.com/iam/3yQQ7JxbPStstuzZ1iqV4RHMK4pp/3y-2048x1229/v1/c870x524.jpg"
                className="img-fluid"
                alt="Cleaning"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <i className="fas fa-check-circle"></i>
              <h3>Professional Cleaners</h3>
              <p>
                Our experienced and trained cleaners are dedicated to providing
                high-quality service every time.
              </p>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="feature row">
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Affordable Pricing</h3>
              <p>
                At Clean & Shine, we believe in full transparency. That's why
                our pricing structure is simple and straightforward. Whether
                it's a one-time deep clean or a regular cleaning service, we
                provide the best value for your money. Check out our competitive
                pricing packages below.
              </p>
            </div>
            <div className="col-md-5 py-5">
              <Table striped bordered hover className="pricing-table">
                <thead>
                  <tr>
                    <th>Frequency</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((row, index) => (
                    <tr key={index}>
                      <td>{row.frequency}</td>
                      <td>{row.pricing}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="section reviews">
        <Col>
          <h2>Customer Reviews</h2>
          <Carousel
            controls={false}
            indicators={false}
            interval={5000}
            wrap={true}
          >
            {reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Card className="review-card">
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Subtitle>{"⭐".repeat(review.rating)}</Card.Subtitle>
                    <Card.Text>{review.review}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="contact">
        <Col className="contact-col">
          <h2>Contact Us</h2>
          <p>Have any questions or need assistance? Contact us today.</p>
          <Button variant="primary" size="lg">
            Contact Us
          </Button>
        </Col>
      </Row>
      <Row className="section">
        <Col>
          <h2>Are you looking for a domestic cleaning job?</h2>
          <div className="row py-4">
            <p className="col-md-8">
              We are currently hiring passionate individuals to join our
              cleaning team. If you enjoy maintaining a clean and organized
              environment, we have great opportunities for you.
            </p>
            <div className="col-md-3 ">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

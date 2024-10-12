import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark text-white movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">DUNE</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />

              <Card.Title className="text-center p-2 m-1">
                EVERYTHING EVERYWHERE ALL AT ONCE
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">
                INFINITE STORM
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">JOKER</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />

              <Card.Title className="text-center p-2 m-1">LIGHTYEAR</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">MORBIUS</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

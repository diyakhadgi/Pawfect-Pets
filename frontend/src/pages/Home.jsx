import Navbar from "../components/Navbar";
import "../styles/Home.css";
import landing from "../assets/landing.jpg";
import { Typography, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpeg";
import dog3 from "../assets/dog3.jpeg";
import dog4 from "../assets/dog4.jpeg";
import dog5 from "../assets/dog5.jpeg";
import dog6 from "../assets/dog6.jpeg";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <div className="small-div">
            <Typography variant="h1" className="quote">
              Care Of Your Little Ones
              <FontAwesomeIcon icon={faPaw} className="paw-icon" />
            </Typography>
          </div>
          <div className="small-div">
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur atque, commodi rerum, quibusdam ipsam obcaecati
              doloribus, velit nemo labore placeat temporibus. In aliquid ullam
              odit perferendis unde. Ad, eaque numquam?
            </Typography>
            <Box className="buttons">
              <Link to="/adoption">
                <button
                  type="button"
                  class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Adopt Me
                </button>
              </Link>
              <Link to="/food">
                <button
                  type="button"
                  class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Shop Now
                </button>
              </Link>
            </Box>
          </div>
        </div>
        <div className="right">
          <img src={landing} alt="Landing" />
        </div>
      </div>

      {/* gallery section  */}
      <div className="gallery">
        <Typography variant="h2" align="center">
          Gallery
        </Typography>
        <div className="galleries">
          <div className="gal-box">
            <img src={dog1} alt="" className="doggie" />
          </div>
          <div className="gal-box">
            <img src={dog2} alt="" className="doggie" />
          </div>
          <div className="gal-box">
            <img src={dog3} alt="" className="doggie" />
          </div>
          <div className="gal-box">
            <img src={dog4} alt="" className="doggie" />
          </div>
          <div className="gal-box">
            <img src={dog5} alt="" className="doggie" />
          </div>
          <div className="gal-box">
            <img src={dog6} alt="" className="doggie" />
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className="blog-container">
        <Typography variant="h2" align="center">
          Blogs
        </Typography>
        <div className="blogs">
          <div className="blog">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Dogs are loyal</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="blog">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>The Importance of Dog Training</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Understanding why training your dog is crucial for a happy
                  life together.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="blog">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Dog Nutrition 101</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Learn what to feed your dog for a healthy, balanced diet.
                  Understanding why a healthy diet is much needed.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

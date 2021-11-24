import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img2 from '../../../src/images/fanjam.png'
import Img3 from '../../../src/images/sweepers.png'
import Img4 from '../../../src/images/budget.png'
import Img5 from '../../../src/images/Weather.png'
import Img6 from '../../../src/images/Password.png'
import Img7 from '../../../src/images/note.png'

export default function Portfolio() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>FanJam Event and Lyrics</h3>
            <a href="https://bradmw.github.io/FanJam-Project-1/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Sweeper's Chores</h3>
            <a href="https://sweeper-chore-chart.herokuapp.com/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Budget Tracker</h3>
            <a href="https://cab-budget-tracker.herokuapp.com/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img5}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Weather Dashboard</h3>
            <a href="https://christa-baccas.github.io/WEATHER_DASHBOARD/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img6}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Password Generator</h3>
            <a href="https://christa-baccas.github.io/PASSWORD_GENERATOR/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img7}
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Note Taker</h3>
            <a href="https://homework-11-note-taker-app-cab.herokuapp.com/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
     </Carousel>{" "} 
    </div>
  );
}

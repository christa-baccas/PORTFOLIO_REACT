import React from "react";
import Card from "react-bootstrap/Card";
import Img2 from "../../../src/images/fanjam.png";
import Img3 from "../../../src/images/sweepers.png";
import Img4 from "../../../src/images/budget.png";
import Img5 from "../../../src/images/Weather.png";
import Img6 from "../../../src/images/Password.png";
import Img7 from "../../../src/images/note.png";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className='card-container'>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img2} className='img'/>
        <Card.Body>
          <Card.Title>FanJam Event and Lyrics</Card.Title>
          <a href="https://bradmw.github.io/FanJam-Project-1/">
            Open Application Here!
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img3}className='img' />
        <Card.Body>
          <Card.Title>Sweeper's Chores</Card.Title>
          <a href="https://sweeper-chore-chart.herokuapp.com/">Open Application Here!</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img4}className='img' />
        <Card.Body>
          <Card.Title>Budget Tracker</Card.Title>
          <a href="https://cab-budget-tracker.herokuapp.com/">Open Application Here!</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img5}className='img' />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <a href="https://christa-baccas.github.io/WEATHER_DASHBOARD/">Open Application Here!</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img6}className='img' />
        <Card.Body>
          <Card.Title>Password Generator</Card.Title>
          <a href="https://christa-baccas.github.io/PASSWORD_GENERATOR/">Open Application Here!</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }} className='card'>
        <Card.Img variant="top" src={Img7}className='img' />
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <a href="https://homework-11-note-taker-app-cab.herokuapp.com/">Open Application Here!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

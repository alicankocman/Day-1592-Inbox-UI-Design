import React from "react";
import Container from "./container";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="title">Your Messages</div>
      <div className='compose'>
        Compose 
        <img src="public/pencil.png" alt="Pencil Icon" className="pencil-icon" />
      </div>
      <Container
        additionalText="4 days ago"
        altyazi="Hi there, how are you?"
        imageUrl="/Ekran görüntüsü 2024-04-04 030405.png"
      >
        Rafel Jay
      </Container>
      <Container
        additionalText="4 days ago"
        altyazi="Hi there, how are you?"
        imageUrl="/Ekran görüntüsü 2024-04-04 030405.png"
      >
        Rafel Jay
      </Container>
      <Container
        additionalText="4 days ago"
        altyazi="Hi there, how are you?"
        imageUrl="/Ekran görüntüsü 2024-04-04 030405.png"
      >
        Rafel Jay
      </Container>
      <Container
        additionalText="4 days ago"
        altyazi="Hi there, how are you?"
        imageUrl="/Ekran görüntüsü 2024-04-04 030405.png"
      >
        Rafel Jay
      </Container>
    </div>
  );
};

export default Main;

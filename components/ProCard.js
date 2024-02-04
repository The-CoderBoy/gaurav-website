import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Div = styled.div`
  margin: auto;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  padding: 20px;
  margin-bottom: 20px;
`;

const P = styled.p`
  color: #9c833e;
  font-family: "Oswald", sans-serif;
  font-size: 17px;
`;

function ExproCard(props) {
  return (
    <Div>
      <P>Title :- {props.title}</P>
      <P>Category :- {props.category}</P>
      <Carousel infiniteLoop={true} swipeable={true} dynamicHeight={true}>
        {props.img.map((x, i) => (
          <div key={i}>
            <img src={x} alt="" />
          </div>
        ))}
      </Carousel>
      <P>{props.discription}</P>
    </Div>
  );
}

export default ExproCard;

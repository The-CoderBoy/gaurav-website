import React from "react";
import styled from "styled-components";

function ExpCard(props) {
  const Div = styled.div`
    margin: auto;
    background-color: white;
    border-radius: 10px;
    width: 70%;
    padding: 30px;
    margin-bottom: 20px;
    &:media {
      width: 80%;
    }
  `;

  const P = styled.p`
    color: #9c833e;
    font-family: "Oswald", sans-serif;
    font-size: 17px;
  `;

  return (
    <Div>
      <P>Job Title :- {props.title}</P>
      <P>Company :- {props.company}</P>
      <P>Duration :- {props.duration}</P>
      <P>{props.description}</P>
    </Div>
  );
}

export default ExpCard;

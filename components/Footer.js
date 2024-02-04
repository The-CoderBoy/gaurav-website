import React from "react";
import styled from "styled-components";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const MainDiv = styled.div`
  background-color: black;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`;

const Div1 = styled.div`
  line-height: 25px;
  color: #e0c886;
  font-size: 13px;
  width: 350px;
`;

const Div2 = styled.div`
  width: 180px;
  color: #e0c886;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;
`;

const Lik = styled(Link)`
  text-decoration: none;
  color: #e0c886;
  font-size: 15px;
  margin-bottom: 5px;
`;

function Footer() {
  return (
    <MainDiv>
      <Div1>
        <div>
          Contact No.:- <br />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#e0c886",
              marginLeft: "15px",
            }}
            href="tel:+91-8094484803"
          >
            +91-8094484803
          </a>
        </div>
        <div>
          Email:- <br />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#e0c886",
              marginLeft: "15px",
            }}
            href="mailto:gauravjoshi747@gmail.com"
          >
            gauravjoshi747@gmail.com
          </a>
        </div>
        <div>
          Addres:- <br />{" "}
          <span style={{ marginLeft: "15px" }}>
            Manikya Nagar, Bhilwara, Rajasthan, Pin-Code:- 311001
          </span>
        </div>
      </Div1>
      <Div2>
        <a
          style={{ color: "#e0c886", height: "65px" }}
          href="https://wa.me/+918094484803"
        >
          <BsWhatsapp />
        </a>
        <a
          style={{ color: "#e0c886", height: "65px" }}
          href="https://www.facebook.com/gauravjoshi747/"
        >
          <BsFacebook />
        </a>
        <a
          style={{ color: "#e0c886", height: "65px" }}
          href="https://www.instagram.com/gauravjoshi747/"
        >
          <BsInstagram />
        </a>
      </Div2>
      <Div3>
        <Lik href="/experience">Experience</Lik>
        <Lik href="/project">Project</Lik>
        <Lik href="/about">About Me</Lik>
      </Div3>
    </MainDiv>
  );
}

export default Footer;

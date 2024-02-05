import React from "react";
import Banner from "../components/Banner";
import style from "../styles/home.module.css";
import { montserrat } from "../utils/font";
import ServiceCard from "../components/ServiceCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import data from "../utils/data";

function index() {
  return (
    <>
      <Banner />
      <h4 className={`${style.headLine} ${montserrat.className}`}>
        My Services
      </h4>

      <div className={style.container}>
        {data.map((x, i) => {
          return (
            <div key={i}>
              <ServiceCard data={x} />
            </div>
          );
        })}
      </div>

      <h4 className={`${style.headLine} ${montserrat.className}`}>
        why choose me
      </h4>

      <div className={style.wcu}>
        <p style={{ marginTop: "-20px" }}>
          Choose me for reliable, innovative solutions that elevate your brand
          in today's competitive digital landscape. I offer a dynamic blend of
          expertise to enhance your online presence. I have so many years of
          experience in IT industry. From crafting visually stunning and highly
          functional websites to implementing strategic social media campaigns
          that resonate with your target audience, I pride myselves on
          delivering comprehensive solutions tailored to your unique needs.
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          paddingTop: "50px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <ServiceCard
            data={{
              backgroundColor: "white",
              textColor: "black",
              imgSrc: "./images/projects.jpeg",
              heading: "My Projects",
              text: "I have built so many projects during my career. Here are my top nothc projects.",
            }}
          />
          <Link href="/project">
            <button className={style.btn}>
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <ServiceCard
            data={{
              backgroundColor: "white",
              textColor: "black",
              imgSrc: "./images/experience.webp",
              heading: "My Experience",
              text: "In my software developer career, I worked for corporate companies and did freelancing.",
            }}
          />
          <Link href="/experience">
            <button className={style.btn}>
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;

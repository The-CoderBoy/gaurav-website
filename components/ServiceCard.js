import React from "react";
import style from "@/styles/serviceCard.module.css";
import { montserrat, inter } from "@/utils/font";

function ServiceCard({ data }) {
  return (
    <div
      className={style.container}
      style={{ backgroundColor: data.backgroundColor }}
    >
      <p
        className={`${montserrat.className} ${style.headLine}`}
        style={{ color: data.textColor }}
      >
        {data.heading}
      </p>
      <img className={style.img} src={data.imgSrc} alt="website" />
      <div
        className={`${inter.className} ${style.p}`}
        style={{ margin: "auto", color: data.textColor }}
      >
        <p>{data.text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

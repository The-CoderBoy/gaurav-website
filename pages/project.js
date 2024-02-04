import React from "react";
import ProCard from "@/components/ProCard";
let c1 = "./images/project/c1.png";
let c2 = "./images/project/c2.png";
let c3 = "./images/project/c3.png";
let c4 = "./images/project/c4.png";
let a1 = "./images/project/a1.png";
let a2 = "./images/project/a2.png";
let a3 = "./images/project/a3.png";
let a4 = "./images/project/a4.png";
let p1 = "./images/project/p1.png";
let p2 = "./images/project/p2.png";
let p3 = "./images/project/p3.png";
let p4 = "./images/project/p4.png";
let d1 = "./images/project/d1.png";
let d2 = "./images/project/d2.png";
let d3 = "./images/project/d3.png";
let d4 = "./images/project/d4.png";
let f1 = "./images/project/f1.png";
let f2 = "./images/project/f2.png";
let f3 = "./images/project/f3.png";
let f4 = "./images/project/f4.png";

function Project() {
  const pro = [
    {
      title: "Color textile",
      category: "Accounting, inventory management, reports",
      discription:
        "This web application was developed for the textile industry, it can create masters of company, spares, groups, and yarn, generate POs and purchases, and manage inventory of raw materials and spare parts. it can create reports of all provided data",
      img: [c1, c2, c3, c4],
    },
    {
      title: "Ashwamegh",
      category: "Algo Trading",
      discription:
        "This is my biggest project so far. It is an algo trading platform that is used to trade in futures, options, and currencies. In this project, we have to do so many mathematical calculations and work with so many APIs.",
      img: [a1, a2, a3, a4],
    },
    {
      title: "Just print",
      category: "Accounting, reports",
      discription:
        "This web application was created for the print media industry to generate reports and bills for merchants.",
      img: [p1, p2, p3, p4],
    },
    {
      title: "Shree Nakoda Explosives",
      category: "Accounting, reporting, inventory management",
      discription:
        "This web application was developed for the explosives and mining industries. It is used to create bills and inventory management purposes.",
      img: [d1, d2, d3, d4],
    },
    {
      title: "Shree Furniture",
      category: "E-Commerce, reporting, inventory management, order management",
      discription:
        "This is an e-commerce website for furniture sales. Here, users can buy furniture, make online payments via payment gateway, track their orders,write reviews, and use all the functionality that an e-commerce website should have.",
      img: [f2, f3, f4, f1],
    },
  ];
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        In my career, I get the chance to work on so many websites and web
        applications, here are some of my biggest projects so far.
      </p>
      {pro.map((x, i) => (
        <div key={i}>
          <ProCard
            title={x.title}
            category={x.category}
            discription={x.discription}
            img={x.img}
          />
        </div>
      ))}
    </div>
  );
}

export default Project;

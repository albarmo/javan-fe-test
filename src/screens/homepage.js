import React, { useEffect, useState } from "react";
import "./style/homepage.css";
import { Navbar, Card, Box, Footer } from "../components";

const dummyData = [
  {
    title: "Standard",
    discount: 10,
    price: "89",
    image: "https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s",
    description: "Works perfect for small teams and companies",
    features: [
      "upload up to 200 MB",
      "View message performance test against variants",
      "Control groups to imporve results",
      "Engage customer",
    ],
  },
  {
    title: "Professional",
    discount: 30,
    price: "249",
    image:
      "https://freeui.design/wp-content/uploads/2018/07/Showcase-Illustration-freeui-cover-1200x900.jpg",
    description: "Works perfect for small teams and companies",
    features: [
      "upload up to 200 MB",
      "View message performance test against variants",
      "Control groups to imporve results",
      "Engage customer",
    ],
  },
  {
    title: "Corporate",
    discount: 40,
    price: "899",
    image:
      "https://image.freepik.com/free-vector/illustration-from-ui-ux-designer_68155-44.jpg",
    description: "Works perfect for small teams and companies",
    features: [
      "upload up to 200 MB",
      "View message performance test against variants",
      "Control groups to imporve results",
      "Engage customer",
    ],
  },
];

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage-content">
        <h1 className="heading-text">
          Pick a Plan, Grow Faster with Foundation
        </h1>
        <div className="box-cardComponent-container">
          {dummyData.map((val, id) => {
            return <Card data={val} />;
          })}
        </div>
        <Box />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;

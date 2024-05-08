import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./Disease.css";

const ListItem = ({ title, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="list-item">
      <h2 onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}>
        {title}
      </h2>
      {isDescriptionVisible && <p>{description}</p>}
    </div>
  );
};

const Disease = () => {
  const diseaseInfo = [
    {
      title: "연쇄구균증",
      description:
        "양식 어류의 연쇄구균증은 세균성 질병 중에서 피해 규모가 매우 큰 질병으로서 사육어종이 다양하고 병원 체가 기회감염성을 나타내어 숙주가 다양하다.",
    },
    { title: "질병 2", description: "질병 2에 대한 설명" },
    { title: "질병 3", description: "질병 3에 대한 설명" },
    { title: "질병 4", description: "질병 4에 대한 설명" },
    { title: "질병 5", description: "질병 5에 대한 설명" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-lg px-4 mx-auto">
        <Header />
        <div className="list">
          {diseaseInfo.map((info, index) => (
            <ListItem
              key={index}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Disease;

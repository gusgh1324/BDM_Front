import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DiseaseLayout from "../components/layout/DiseaseLayout";

interface DiseaseInfo {
  title: string;
  description: string;
}

const Disease = () => {
  const diseaseInfo: DiseaseInfo[] = [
    {
      title: "연쇄구균증",
      description:
        "양식 어류의 연쇄구균증은 세균성 질병 중에서 피해 규모가 매우 큰 질병으로서 사육어종이 다양하고 병원 체가 기회감염성을 나타내어 숙주가 다양하다.",
    },
    { title: "질병 2", description: "질병 2에 대한 설명" },
    { title: "질병 3", description: "질병 3에 대한 설명" },
    { title: "질병 4", description: "질병 4에 대한 설명" },
    { title: "질병 5", description: "질병 5에 대한 설명" },
    { title: "질병 6", description: "질병 6에 대한 설명" },
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <DiseaseLayout diseaseInfo={diseaseInfo} />
        <Footer />
      </div>
    </div>
  );
};

export default Disease;

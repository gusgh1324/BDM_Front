import React from "react";
import "./MapLayout.css";

interface MapLayoutProps {
  mapId: string;
}

const MapLayout: React.FC<MapLayoutProps> = ({ mapId }) => {
  return (
    <div className="map-layout">
      <h1 className="title">수산질병관리사와 수산질병관리원 소개</h1>
      <p className="description">
        수산질병관리원은 수산생물진료업을 목적으로 개설된 기관으로,
        수산질병관리사, 국가, 지방자치단체, 수산생물진료업을 목적으로 설립한
        법인, 수산생물질병 관련 교육과정을 운영하는 대학, 수산생물 관련 단체
        등이 개설 및 운영합니다. 전국에 수산질병관리사들이 근무하고 있으며,
        양식장 점검, 질병 진단, 약품 처방 등의 업무를 수행합니다.
      </p>
      <p className="description">
        수산질병관리사는 바다, 강, 호수 등 모든 물 속에 분포하는 수산생물을
        진료합니다. 양식산업이 발전함에 따라 새로운 질병이 발생하는 경우가 많아
        수산질병관리사의 역할이 점점 중요해지고 있습니다.
      </p>
      <p className="description">
        수산질병관리사는 현장을 방문하여 어류의 상태를 확인하고, 질병을 진단하기
        위해 외부검사, 해부, 세균배양, 진단키트, PCR 등의 과정을 거칩니다.
        확진된 질병에 맞는 약을 처방하기 위해 디스크 테스트를 진행하며,
        경구투여법, 주사법, 약욕법 등의 투여 방법을 사용합니다.
      </p>
      <p className="description">
        세계적으로 수산질병관리사 면허가 전문적으로 실행되고 있는 국가는 한국이
        유일하다고 합니다. 최근 양식 수산물의 수출이 증가함에 따라 어류 안전성
        검사와 검역관리의 중요성이 커지고 있습니다. 이에 따라 수산질병관리사의
        역할과 저변도 점차 확대될 것으로 전망됩니다.
      </p>
      <div id={mapId} className="map-container" />
    </div>
  );
};

export default MapLayout;

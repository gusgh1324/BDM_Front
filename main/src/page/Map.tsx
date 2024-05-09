import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MapLayout from "../components/layout/MapLayout";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(35.1, 129.05),
      level: 7,
    };

    let map = new window.kakao.maps.Map(container, options);

    let centerPosition = new window.kakao.maps.LatLng(35.079338, 129.0756457);
    let centerMarker = new window.kakao.maps.Marker({
      position: centerPosition,
    });
    centerMarker.setMap(map);

    let centerOverlayContent = `
    <div class="custom-overlay">
      <div class="custom-overlay-title">국립수산물품질관리원</div>
      <div class="custom-overlay-content">부산 영도구 해양로 337</div>
    </div>
  `;
    let centerOverlay = new window.kakao.maps.CustomOverlay({
      map: map,
      position: centerPosition,
      content: centerOverlayContent,
      yAnchor: 1.75,
    });
    centerOverlay.setMap(map);

    const locations = [
      {
        title: "국립수산물품질관리원 부산지원",
        latlng: new window.kakao.maps.LatLng(35.099802, 129.0373695),
        content: "부산 중구 중앙대로30번길 8",
      },
      {
        title: "부경대학교 수산질병관리원",
        latlng: new window.kakao.maps.LatLng(35.1337774, 129.10865),
        content: "부산 남구 용소로 45",
      },
      {
        title: "힐앤팜 수산질병관리원",
        latlng: new window.kakao.maps.LatLng(35.0816334, 129.0161319),
        content: "부산 서구 감천로255번길 8-8 202호",
      },
    ];

    locations.forEach((loc) => {
      let marker = new window.kakao.maps.Marker({
        position: loc.latlng,
      });
      marker.setMap(map);

      let overlayContent = `
        <div class="custom-overlay">
          <div class="custom-overlay-title">${loc.title}</div>
          <div class="custom-overlay-content">${loc.content}</div>
        </div>
      `;
      let overlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: loc.latlng,
        content: overlayContent,
        yAnchor: 1.75,
      });
    });
  }, []);

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MapLayout mapId="map" />
        <Footer />
      </div>
    </div>
  );
};

export default Map;

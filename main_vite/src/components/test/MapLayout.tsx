import { useEffect } from "react";

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 레벨
    };

    // 지도 생성
    new window.kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    new window.kakao.maps.Marker({
      position: markerPosition,
    });
  });

  return <div id="map" style={{ width: "100vh", height: "80vh" }} />;
};

export default MapContainer;

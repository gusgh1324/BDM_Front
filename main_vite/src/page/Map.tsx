import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MapLayout from "../components/layout/MapLayout";

declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLng;
        Map: new (container: HTMLElement | null, options: MapOptions) => Map;
        Marker: new (options: MarkerOptions) => Marker;
        CustomOverlay: new (options: CustomOverlayOptions) => CustomOverlay;
      };
    };
  }
}

interface LatLng {
  getLat: () => number;
  getLng: () => number;
}

interface MapOptions {
  center: LatLng;
  level: number;
}

interface Map {
  setCenter: (latlng: LatLng) => void;
  setLevel: (level: number) => void;
}

interface MarkerOptions {
  position: LatLng;
}

interface Marker {
  setMap: (map: Map | null) => void;
}

interface CustomOverlayOptions {
  map: Map;
  position: LatLng;
  content: string;
  yAnchor: number;
}

interface CustomOverlay {
  setMap: (map: Map | null) => void;
}

const MapComponent = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options: MapOptions = {
      center: new window.kakao.maps.LatLng(35.12, 129.06),
      level: 8,
    };
    const map = new window.kakao.maps.Map(container, options);

    const locations = [
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
      const marker = new window.kakao.maps.Marker({
        position: loc.latlng,
      });
      marker.setMap(map);

      const overlayContent = `
        <div class="custom-overlay">
          <div class="custom-overlay-title">${loc.title}</div>
          <div class="custom-overlay-content">${loc.content}</div>
        </div>
      `;
      new window.kakao.maps.CustomOverlay({
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

export default MapComponent;

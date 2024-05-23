import { useState } from "react";
import "./DiseaseLayout.css";

interface DiseaseInfo {
  title: string;
  description: string;
}

interface ListItemProps {
  title: string;
  description: string;
  index: number;
}

const ListItem = ({ title, description, index }: ListItemProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className={`list-item ${index < 4 ? "special-style" : ""}`}>
      <h2 onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}>
        {title}
      </h2>
      {isDescriptionVisible && <p>{description}</p>}
    </div>
  );
};

interface DiseaseLayoutProps {
  diseaseInfo: DiseaseInfo[];
}

const DiseaseLayout = ({ diseaseInfo }: DiseaseLayoutProps) => {
  const handleImageClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(event.currentTarget.href, "_blank");
  };

  return (
    <div className="list">
      {diseaseInfo.map((info, index) => (
        <ListItem
          key={index}
          title={info.title}
          description={info.description}
          index={index}
        />
      ))}

      <div className="image-container">
        <a
          href="https://www.nifs.go.kr/fishguard/disease01.do#"
          onClick={handleImageClick}
        >
          <img src="/국수과.jpg" alt="국립수산과학원_국가수산물질병정보" />
        </a>
        <a
          className="im2"
          href="https://nfqs.go.kr/PreventionMgM/index1.jsp"
          onClick={handleImageClick}
        >
          <img
            src="/국가수산생물_방역_통합관리.png"
            alt="국가수산생물 방역 통합관리"
          />
        </a>
      </div>
    </div>
  );
};

export default DiseaseLayout;

import { useState } from "react";
import "./DiseaseLayout.css";

interface DiseaseInfo {
  title: string;
  description: string;
}

interface ListItemProps {
  title: string;
  description: string;
}

const ListItem = ({ title, description }: ListItemProps) => {
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
        />
      ))}

      <div className="image-container">
        <a
          href="https://www.nifs.go.kr/fishguard/disease01.do#"
          onClick={handleImageClick}
        >
          <img src="/국수과.jpg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default DiseaseLayout;

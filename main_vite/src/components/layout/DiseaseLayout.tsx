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
  return (
    <div className="list">
      {diseaseInfo.map((info, index) => (
        <ListItem
          key={index}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
};

export default DiseaseLayout;

import { useState } from "react";

interface DiseaseInfo {
  title: string;
  description: string;
}

interface ListItemProps {
  title: string;
  description: string;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}

const ListItem = ({
  title,
  description,
  index,
  onEdit,
  onDelete,
}: ListItemProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div
      className={`p-4 mb-4 border rounded-lg ${
        index < 4 ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2
        onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        className="text-lg font-semibold cursor-pointer hover:text-blue-500"
      >
        {title}
      </h2>
      {isDescriptionVisible && (
        <div>
          <p className="mt-2 text-gray-700">{description}</p>
          <div className="flex mt-2 space-x-2">
            <button
              onClick={onEdit}
              className="px-2 py-1 text-white bg-yellow-400 rounded hover:bg-yellow-500"
            >
              수정하기
            </button>
            <button
              onClick={onDelete}
              className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
              삭제하기
            </button>
          </div>
        </div>
      )}
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

  const handleAddDisease = () => {
    alert("권한이 없습니다.");
  };

  const handleEdit = (index: number) => {
    alert("권한이 없습니다.");
  };

  const handleDelete = (index: number) => {
    alert("권한이 없습니다.");
  };

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddDisease}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          병 추가하기
        </button>
      </div>
      {diseaseInfo.map((info, index) => (
        <ListItem
          key={index}
          title={info.title}
          description={info.description}
          index={index}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <div className="flex flex-col items-center mt-8 space-y-4">
        <a
          href="https://www.nifs.go.kr/fishguard/disease01.do#"
          onClick={handleImageClick}
          className="block overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105"
        >
          <img
            src="/국수과.jpg"
            alt="국립수산과학원_국가수산물질병정보"
            className="object-cover w-full h-auto"
          />
        </a>
        <a
          className="block overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105"
          href="https://nfqs.go.kr/PreventionMgM/index1.jsp"
          onClick={handleImageClick}
        >
          <img
            src="/국가수산생물_방역_통합관리.png"
            alt="국가수산생물 방역 통합관리"
            className="object-cover w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default DiseaseLayout;

// MyPageHomeLayout.tsx
import React, { useState } from "react";
import MyProfileLayout from "./MyProfileLayout";
import MyBillingLayout from "./MyBillingLayout";
import MyHistoryLayout from "./MyHistoryLayout";
import MyAccountLayout from "./MyAccountLatout";
import MyWithdrawalLayout from "./MyWithdrawalLayout";
import { Link } from "react-router-dom";

interface MyPageHomeLayoutProps {
  topics: string[];
}

const MyPageHomeLayout = ({ topics }: MyPageHomeLayoutProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicClick = (topic: string) => {event?.preventDefault();
    setSelectedTopic(topic);
  };

  return (
    <div className="sidebar">
      <div>
      <ul>
        {topics.map((topic, index) => (
          <Link to={""}><li key={index} onClick={() => handleTopicClick(topic)}>
            {topic}
          </li></Link>
        ))}
      </ul></div>
      <div className="content">
        {selectedTopic && <RenderContent topic={selectedTopic} />}
      </div>
    </div>
  );
};

const RenderContent: React.FC<{ topic: string }> = ({ topic }) => {
  switch (topic) {
    case "프로필":
      return <div><MyProfileLayout/></div>;
    case "결제":
      return <div><MyBillingLayout/></div>;
    case "계정":
      return <div><MyAccountLayout/></div>;
    case "히스토리":
      return <div><MyHistoryLayout/></div>;
    case "탈퇴":
      return <div><MyWithdrawalLayout/></div>;
    default:
      return null;
  }
};

export default MyPageHomeLayout;

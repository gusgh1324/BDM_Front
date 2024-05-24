import React, { useState, useEffect } from "react";
import MyProfileLayout from "./ProfileLayout";
import MyBillingLayout from "./BillingLayout";
import MyHistoryLayout from "./HistoryLayout";
import Calendar from "./Calendar";
import MyWithdrawalLayout from "./WithdrawalLayout";
import { Link } from "react-router-dom";
import "./MyPageHomeLayout.css";

interface MyPageHomeLayoutProps {
  topics: string[];
}

const MyPageHomeLayout = ({ topics }: MyPageHomeLayoutProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("프로필");

  const handleTopicClick = (topic: string) => {
    event?.preventDefault();
    setSelectedTopic(topic);
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const isSelected = (topic: string) => {
    return selectedTopic === topic ? 'selected' : '';
  };
  return (
    <div className="sidebar">
      <div><li className=" text-lg font-semibold text-center py-4.5 p-4 pl-5 border border-pink-300 bg-pink-300 text-gray200 list-none ">Menu<button
        className=" text-lg font-semibold mb-4"
        onClick={toggleSidebar}
      >
       
      </button></li>

      
        <ul className="margin">
          
          {topics.map((topic, index) => (
            <Link to={""} key={index}>
              <li
                className={`jebaljombakyura py-2 hover:bg-gray-700 cursor-finger ${isSelected(topic)}`}
                onClick={() => handleTopicClick(topic)}
              > 
              
                {topic}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedTopic && <RenderContent topic={selectedTopic} />}
      </div>
      
    </div>
  );
};

const RenderContent: React.FC<{ topic: string }> = ({ topic }) => {
  switch (topic) {
    case "프로필":
      return (
        <div>
          <MyProfileLayout />
        </div>
      );
    case "결제":
      return (
        <div>
          <MyBillingLayout />
        </div>
      );
    case "달력":
      return (
        <div>
          <Calendar />
        </div>
      );
    case "히스토리":
      return (
        <div>
          <MyHistoryLayout />
        </div>
      );
    case "회원탈퇴":
      return (
        <div>
          <MyWithdrawalLayout />
        </div>
      );
    default:
      return null;
  }
};

export default MyPageHomeLayout;

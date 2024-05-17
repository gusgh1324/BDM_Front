import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import MyPageHomeLayout from "../components/layout/MyPageHomeLayout";
import React, {useState} from "react";

interface Topic {
  id: number;
  title: string;
  body: string;
}



const MyPageHome: React.FC = () => {
  const mode = 'WELCOME';
const topics: Topic[] = [
  { id: 1, title: "Title 1", body: "Body 1" },
  { id: 2, title: "Title 2", body: "Body 2" },
  { id: 3, title: "Title 3", body: "Body 3" },
  { id: 4, title: "Title 4", body: "Body 4" },
  { id: 5, title: "Title 5", body: "Body 5" }
];
let content = null;
// if(mode === 'WELCOME'){
//   content = 

// }else if(mode === 'READ') {
//   content = 
// }

  
 
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MyPageHomeLayout />
      
        <Footer />
      </div>
      {content}
    </div>
  );
};

export default MyPageHome;

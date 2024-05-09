import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SubLayout from "../components/layout/SubLayout";

interface Plan {
 name: string;
 description: string;
 price: number;
 frequency: string;
 features: string[];
 recommended?: boolean;
}

const Sub = () => {
 const [plans, setPlans] = useState<Plan[]>([
   {
     name: "프리 회원",
     description: "기본 기능을 무료로 이용할 수 있습니다.",
     price: 0,
     frequency: "/월",
     features: ["일부 콘텐츠 제한", "기본 고객 지원"],
   },
   {
     name: "프리미엄 회원",
     description: "모든 기능을 이용할 수 있는 표준 플랜입니다.",
     price: 19800,
     frequency: "/월",
     features: ["모든 콘텐츠 이용 가능", "우선 고객 지원", "추가 혜택 제공"],
     recommended: true,
   },
   {
     name: "평생 회원",
     description: "한 번의 결제로 평생 프리미엄 기능을 이용할 수 있습니다.",
     price: 196000,
     frequency: "",
     features: ["프리미엄 기능 평생 이용", "우선 고객 지원", "추가 혜택 제공"],
   },
 ]);

 return (
   <div className="page-container">
     <div className="content-container">
       <Header />
       <SubLayout plans={plans} />
       <Footer />
     </div>
   </div>
 );
};

export default Sub;
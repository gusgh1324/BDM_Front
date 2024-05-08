import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { CheckIcon } from '@heroicons/react/20/solid';
import './Sub.css';

const Sub = () => {
  const [plans, setPlans] = useState([
    {
      name: '프리 회원',
      description: '기본 기능을 무료로 이용할 수 있습니다.',
      price: 0,
      frequency: '/월',
      features: [
        '일부 콘텐츠 제한',
        '기본 고객 지원',
      ],
    },
    {
      name: '프리미엄 회원',
      description: '모든 기능을 이용할 수 있는 표준 플랜입니다.',
      price: 19800,
      frequency: '/월',
      features: [
        '모든 콘텐츠 이용 가능',
        '우선 고객 지원',
        '추가 혜택 제공',
      ],
      recommended: true,
    },
    {
      name: '평생 회원',
      description: '한 번의 결제로 평생 프리미엄 기능을 이용할 수 있습니다.',
      price: 196000,
      frequency: '',
      features: [
        '프리미엄 기능 평생 이용',
        '우선 고객 지원',
        '추가 혜택 제공',
      ],
    },
  ]);

  return (
    <div className="sub-container">
      <div className="sub-wrapper">
        <Header />
        <div className="sub-content">
          <div className="sub-heading">
            <h2 className="sub-title">원하는 플랜을 선택하세요</h2>
            <p className="sub-description">
              다양한 옵션의 구독 플랜을 준비했습니다. 필요에 맞는 플랜을 선택해 서비스를 이용하세요.
            </p>
          </div>
          <div className="sub-plans">
            {plans.map((plan) => (
              <div key={plan.name} className={`sub-plan ${plan.recommended ? 'sub-plan-recommended' : ''}`}>
                <div className="sub-plan-content">
                  {plan.recommended && (
                    <div className="sub-plan-badge">
                      <div className="sub-plan-badge-text">추천</div>
                    </div>
                  )}
                  <div className="sub-plan-details">
                    <div>
                      <h3 className="sub-plan-name">{plan.name}</h3>
                      <p className="sub-plan-description">{plan.description}</p>
                    </div>
                    <div className="sub-plan-price">
                      <span className="sub-plan-price-amount">{plan.price.toLocaleString()}</span>
                      <span className="sub-plan-price-frequency">원{plan.frequency}</span>
                    </div>
                    <ul role="list" className="sub-plan-features">
                      {plan.features.map((feature) => (
                        <li key={feature} className="sub-plan-feature">
                          <CheckIcon className="sub-plan-feature-icon" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="sub-plan-button-wrapper">
                      <a href="#" className="sub-plan-button">
                        구독하기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sub;
import { CheckIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import "./SubLayout.css";

interface Plan {
  name: string;
  description: string;
  price: number;
  frequency: string;
  features: string[];
  recommended?: boolean;
}

interface SubLayoutProps {
  plans: Plan[];
}

const SubLayout = ({ plans }: SubLayoutProps) => {
  const navigate = useNavigate();

  const handleSubscribe = (plan: Plan) => {
    const queryParams = new URLSearchParams();
    queryParams.append("name", plan.name);
    queryParams.append("price", plan.price.toString());
    navigate(`/sandbox?${queryParams.toString()}`);
  };

  return (
    <div className="sub-content">
      <div className="sub-heading">
        <h2 className="sub-title">원하는 플랜을 선택하세요</h2>
        <p className="sub-description">
          다양한 옵션의 구독 플랜을 준비했습니다. 필요에 맞는 플랜을 선택해
          서비스를 이용하세요.
        </p>
      </div>
      <div className="sub-plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`sub-plan ${
              plan.recommended ? "sub-plan-recommended" : ""
            }`}
          >
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
                  <span className="sub-plan-price-amount">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="sub-plan-price-frequency">
                    원{plan.frequency}
                  </span>
                </div>
                <ul className="sub-plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="sub-plan-feature">
                      <CheckIcon
                        className="sub-plan-feature-icon"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="sub-plan-button-wrapper">
                  {plan.price !== 0 && (
                    <button
                      className="sub-plan-button"
                      onClick={() => handleSubscribe(plan)}
                    >
                      구독하기
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubLayout;

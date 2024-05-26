import "./MyPageHomeLayout.css";
import { Link } from "react-router-dom";

const MyBillingLayout = () => {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-600">My Billing</h1>

      <div className="billing">
        <h3 className="font-bold">Thanks for being a Pro</h3>
        <ul>
          <li>프리미엄 플랜을 구독해 주셔서 감사드립니다.</li>
          <li>ㅤ• 모든 콘텐츠 이용 가능</li>
          <li>ㅤ• 우선 고객 지원</li>
          <li>ㅤ• 추가 혜택 제공</li>
        </ul>
      </div>
      <div className="billing">
        <h3 className="font-bold">Payment</h3>
        <div className="flex items-center justify-between">
          <span className="mr-auto">Linked by TossPayment</span>
          <Link
            to="/sub"
            className="px-4 py-2 font-bold text-white bg-pink-400 rounded hover:bg-pink-500"
          >
            상세정보
          </Link>
        </div>
      </div>
      <div className="billing">
        <h3 className="font-bold">Invoices</h3>
        <table>
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200">Date</th>
              <th className="border-b-2 border-gray-200">Total</th>
              <th className="border-b-2 border-gray-200">Status</th>
              <th className="border-b-2 border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024년 5월 6일</td>
              <td>19,800 원</td>
              <td>Paid</td>
              <td>View invoice</td>
            </tr>
            <tr>
              <td>2024년 4월 6일</td>
              <td>19,800 원</td>
              <td>Paid</td>
              <td>View invoice</td>
            </tr>
            <tr>
              <td>2024년 3월 6일</td>
              <td>19,800 원</td>
              <td>Paid</td>
              <td>View invoice</td>
            </tr>
            <tr>
              <td>2024년 2월 6일</td>
              <td>19,800 원</td>
              <td>Paid</td>
              <td>View invoice</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="billing">
        <h3 className="font-bold">Cancelation</h3>
        <div className="flex items-center justify-between">
          <span className="mr-auto">Cancel plan</span>
          <Link
            to=""
            className="px-4 py-2 font-bold text-white bg-pink-400 rounded hover:bg-pink-500"
          >
            구독 취소
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBillingLayout;

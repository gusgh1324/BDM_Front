import "./MyPageLayout.css";
const MyPageLayout = () => {
  return (
    <div className="wrap">
      <h2 className="sub-title">회원 탈퇴하기</h2>

      <p>회원탈퇴를 하시려면 비밀번호를 입력하세요.</p>

      <input
        id="password"
        name="password"
        type="password"
        className="form-input"
        placeholder="비밀번호를 입력하세요"
      />

      <div className="flex">
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
          회원탈퇴
        </button>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          이전
        </button>
      </div>
    </div>
  );
};

export default MyPageLayout;

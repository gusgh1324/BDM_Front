import React from "react";

const Calendar = () => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 날짜 기준으로 월의 첫 번째 날과 마지막 날을 계산
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // 월의 첫 날의 요일 (0: 일요일, 1: 월요일, ...)
  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // 달력을 그리기 위한 배열 생성
  const monthDays = [];
  let week = [];

  // 시작하는 요일까지 빈 칸 추가
  for (let i = 0; i < startDay; i++) {
    week.push(null);
  }

  // 날짜 채우기
  for (let day = 1; day <= totalDays; day++) {
    week.push(day);
    if (week.length === 7) {
      monthDays.push(week);
      week = [];
    }
  }

  // 남은 칸 채우기
  while (week.length < 7) {
    week.push(null);
  }
  monthDays.push(week);

  return (
    <div className="max-w-3xl p-4 mx-auto border border-pink-300 rounded-lg">
      <h2 className="mb-4 text-3xl font-bold text-center">
        {now.toLocaleString("ko-KR", { year: "numeric", month: "long" })}
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={`font-semibold text-center border border-gray-300 ${
              index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : ""
            }`}
          >
            {day}
          </div>
        ))}
        {monthDays.flat().map((day, index) => (
          <div
            key={index}
            className={`text-center p-4 border border-gray-300 ${
              day === now.getDate()
                ? "font-bold bg-yellow-200"
                : "text-gray-700"
            } ${
              index % 7 === 0
                ? "text-red-500"
                : index % 7 === 6
                  ? "text-blue-500"
                  : ""
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

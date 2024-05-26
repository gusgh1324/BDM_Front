const Calendar = () => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const monthDays = [
    [28, 29, 30, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 1],
  ];

  return (
    <div className="max-w-3xl p-4 mx-auto border border-pink-300 rounded-lg">
      <h2 className="mb-4 text-3xl font-bold text-center">May 2024</h2>
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
              day === 1 ? "font-bold" : "text-gray-700"
            } ${
              index % 7 === 0
                ? "text-red-500"
                : index % 7 === 6
                  ? "text-blue-500"
                  : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

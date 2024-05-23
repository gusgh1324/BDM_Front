import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyPageHomeLayout.css";
import "./MyHistoryDetail";

const MyHistoryLayout = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      date: "2024년 5월 6일",
      total: "US$22.00",
      status: "Paid",
      image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F52%2Fe9%2F1c%2F52e91cb563dce997d5f8a03da26b92cb.jpg&type=sc960_832"
    },
    {
      id: 2,
      date: "2024년 5월 6일",
      total: "US$22.00",
      status: "Paid",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240407_146%2F1712491384777UNT1J_JPEG%2F58124022480934754_1083232035.jpeg&type=sc960_832"
    },
    {
      id: 3,
      date: "2024년 4월 6일",
      total: "US$22.00",
      status: "Paid",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20231221_220%2F1703141893737BfeBX_JPEG%2F8742264532845654_1074588519.jpeg&type=sc960_832"
    },
    {
      id: 4,
      date: "2024년 3월 6일",
      total: "US$20.00",
      status: "Paid",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA3MTJfMjAw%2FMDAxNTMxMzk2OTU5Mzc2.SKHerChVuCSWbiRSJfa-SZXsZNMoDzZd_L-RREQlFxog.7rghIhRbj7RKAKZDqblbwgdPpV_CYfRg7k8FbNFwcYwg.JPEG.hishiny7%2F%25C4%25C3%25B7%25AF%25B8%25B5%25C2%25FC%25C1%25B6%25B5%25B5%25BE%25C8.jpg&type=sc960_832"
    },
    
    {
      id: 5,
      date: "2024년 5월 6일",
      total: "US$22.00",
      status: "Paid",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240407_146%2F1712491384777UNT1J_JPEG%2F58124022480934754_1083232035.jpeg&type=sc960_832"
    },
    
    {
      id: 6,
      date: "2024년 5월 6일",
      total: "US$22.00",
      status: "Paid",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240407_146%2F1712491384777UNT1J_JPEG%2F58124022480934754_1083232035.jpeg&type=sc960_832"
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-600">My History</h1>
      <div className="junche">
        <div>
          <table>
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200">Image</th>
                <th className="border-b-2 border-gray-200">Date</th>
                <th className="border-b-2 border-gray-200">Title</th>
                <th className="border-b-2 border-gray-200">Description</th>
                <th className="border-b-2 border-gray-200">Detail</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt="" width={"30px"} /></td>
                  <td>{item.date}</td>
                  <td>{item.total}</td>
                  <td>{item.status}</td>
                  <td>
                  <Link to={"./MyHistoryDetail"} className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-0.8 px-3 rounded w-30 w-fixed-width">
                  
                  
  Details
</Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full mr-2 bg-gray-200 hover:bg-gray-400 focus:outline-none"
        >
          &lt;
        </button>
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
          <Link
            key={i}
            to=""
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded-full mx-1 ${
              currentPage === i + 1 ? "bg-gray-300" : "bg-gray-200"
            } hover:bg-gray-400 focus:outline-none`}
          >
            {i + 1}
          </Link>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          className="px-3 py-1 rounded-full ml-2 bg-gray-200 hover:bg-gray-400 focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MyHistoryLayout;

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  mno: number;
  name: string;
  email: string;
  password: string;
  userImage: string;
}

function Dbtest() {
  const baseUrl = "http://localhost:8089";

  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    putSpringData();
  }, []);

  async function putSpringData() {
    try {
      const res = await axios.get<Data[]>(`${baseUrl}/server/members/get/all`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("데이터를 불러오는 중 에러가 발생했습니다.");
    }
  }

  return (
    <div className="App">
      <h2>data</h2>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div>
          {data.map((datas) => (
            <div key={datas.mno}>
              <div>번호: {datas.mno}</div>
              <div>이름: {datas.name}</div>
              <div>이메일: {datas.email}</div>
              <div>
                이미지:{" "}
                <img src={datas.userImage} alt={datas.name} width="100" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dbtest;

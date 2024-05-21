import axios from "axios";

const baseUrl = "http://localhost:8089/server";

interface Data {
  mno: number;
  name: string;
  email: string;
  password: string;
  userImage: string;
}

export async function getAllUsers() {
  try {
    const res = await axios.get<Data[]>(`${baseUrl}/members/get/all`);
    return res.data;
  } catch (err) {
    console.error("데이터를 불러오는 중 에러가 발생했습니다.", err);
    throw err;
  }
}

export async function deleteUser(mno: number) {
  try {
    await axios.delete(`${baseUrl}/members/delete/${mno}`);
  } catch (err) {
    console.error("사용자를 삭제하는 중 에러가 발생했습니다.", err);
    throw err;
  }
}

export async function updateUser(user: Data) {
  try {
    const res = await axios.put(`${baseUrl}/members/update/${user.mno}`, user);
    return res.data;
  } catch (err) {
    console.error("사용자를 업데이트하는 중 에러가 발생했습니다.", err);
    throw err;
  }
}

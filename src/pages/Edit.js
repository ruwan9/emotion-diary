import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const who = searchParams.get("who");
  console.log("who: ", who);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "Alex" })}>QS 바꾸기</button>
      <br />
      <button onClick={() => navigate("/home")}>HOME</button>
      <br />
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}

export default Edit;

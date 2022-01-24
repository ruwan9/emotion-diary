import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headText={"App"} leftChild={<MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 버튼")} />} rightChild={<MyButton text={"오른쪽 버튼"} onClick={() => alert("오른쪽 버튼")} />} />
        <h1>App.js</h1>
        <MyButton text={"버튼"} type={"positive"} onClick={() => alert("포지티브")} />
        <MyButton text={"버튼"} type={"negative"} onClick={() => alert("네거티브")} />
        <MyButton text={"버튼"} onClick={() => alert("디폴트")} />

        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion/emotion1.png`} alt="Emotion1" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion/emotion2.png`} alt="Emotion2" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion/emotion3.png`} alt="Emotion3" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion/emotion4.png`} alt="Emotion4" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion/emotion5.png`} alt="Emotion5" /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

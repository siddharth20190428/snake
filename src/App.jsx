import { useState } from "react";
import "./App.css";
import SnakeBoard from "./components/board/SnakeBoard";
import Header from "./components/Header/Header";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} />
      <SnakeBoard score={score} setScore={setScore} />
    </div>
  );
}

export default App;

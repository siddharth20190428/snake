import "./App.css";
import SnakeBoard from "./components/board/SnakeBoard";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Score />
      <SnakeBoard />
    </div>
  );
}

export default App;

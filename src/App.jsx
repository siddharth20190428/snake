import "./App.css";
import Controls from "./components/controls/Controls";
import SnakeBoard from "./components/snakeboard/SnakeBoard";

function App() {
  return (
    <div className="App">
      <Controls />
      <SnakeBoard />
    </div>
  );
}

export default App;

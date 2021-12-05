import HowToPlay from "./HowToPlay";
import "./header.css";
import Music from "./Music";

const Header = ({ score }) => {
  return (
    <div className="header">
      <div>
        <Music />
      </div>
      <div>Score : {score}</div>
      <div>
        <HowToPlay />
      </div>
    </div>
  );
};

export default Header;

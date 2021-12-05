import HowToPlay from "./HowToPlay";
import "./header.css";
import Music from "./Music";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Music />
      </div>
      <div>
        <HowToPlay />
      </div>
    </div>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { FiMusic } from "react-icons/fi";
import "./header.css";

var audio = new Audio("/music/theme.mp3");

const Music = () => {
  const [play, setPlay] = useState(0);

  play ? audio.play() : audio.pause();
  useEffect(() => {
    setPlay(1);
    audio.volume = 0.1;
    audio.loop = true;
  }, []);

  return (
    <div
      className="music"
      style={{ cursor: "pointer" }}
      onClick={() => setPlay(!play)}
    >
      <FiMusic />
      <p className="suffix">Music</p>
    </div>
  );
};

export default Music;

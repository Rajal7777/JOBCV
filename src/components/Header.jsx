import { useContext } from "react";
import ThemeContext from "../context/ThemeContextValue";

import Button from "../UI/Button";
import { Text, Download } from "lucide-react";

import profile from "../images/javascript.jpg";
import profileDarkMode from "../images/javascriptDarkMode.png";
import "../styles/header.css";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  const image = theme === "light" ? profile : profileDarkMode;

  return (
    <header>
      <div className="header-container">
        <div className="header-profile">
          <b>Hi, I'm </b>
          <h2>Rajal Suwal</h2>
          <h3>Frontend Developer</h3>
          <p>
            I build modern, responsive web applications with React and
            JavaScript,css and clean UI/UX.
          </p>

          <div className="profile-btn">
            <Button>
              <Text />
              View my projects{" "}
            </Button>
            <Button className="cv-btn">
              <Download />
              Download CV((PDF)){" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="header-image">
        <img src={image} alt="javascript code image." />
      </div>
    </header>
  );
}

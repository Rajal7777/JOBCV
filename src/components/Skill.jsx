import { useState } from "react";
import { topics } from "../data/data";

import Section from "./Section";
import Button from "../UI/Button";
import "../styles/skill.css";

export default function Skill() {
  const [showExample, setShowExample] = useState();

  console.log("state", showExample);
  function handleSelect(btnParameter) {
    setShowExample(btnParameter);
    console.log("handleSelect clicked", btnParameter + showExample);
  }

  return (
    <Section title="MY SKILLS" id="examples">
      <menu>
        <Button
          isSelected={showExample === "html"}
          onClick={() => handleSelect("html")}
        >
          Html
        </Button>

        <Button
          isSelected={showExample === "css"}
          onClick={() => handleSelect("css")}
        >
          Css
        </Button>

        <Button
          isSelected={showExample === "javascript"}
          onClick={() => handleSelect("javascript")}
        >
          Javascript
        </Button>

        <Button
          isSelected={showExample === "react"}
          onClick={() => handleSelect("react")}
        >
          React
        </Button>

        <Button
          isSelected={showExample === "typescript"}
          onClick={() => handleSelect("typescript")}
        >
          Typescript
        </Button>

        <Button
          isSelected={showExample === "tailwind"}
          onClick={() => handleSelect("tailwind")}
        >
          Tailwind
        </Button>
      </menu>
      {!showExample && <p>Please select the topic.</p>}

      {showExample && (
        <div className="example-content">
          <h3>{topics[showExample].title}</h3>
          <p>{topics[showExample].description}</p>
          <pre>{topics[showExample].code}</pre>
        </div>
      )}
    </Section>
  );
}

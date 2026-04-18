import Example from "./Example";
import Section from "./Section";

import "../styles/aboutMe.css";
import { useState } from "react";
export default function AboutMe() {
  const [readMore, setReadMore] = useState(false);

  const code = ["HTML", "CSS", "JAVASCRIPT", "REACT"];

  function handleReadMore() {
    setReadMore((prev) => !prev);
  }
  console.log(readMore);
  return (
    <>
      <Section title="About me" className="aboutMe">
        <div className="about-content">
          <p>
            I am a self-taught Web Developer focused on building clean,
            responsive, and user-friendly applications. I am curious about how
            the web works on both client-side and server-side.
          </p>

          <strong>I have a solid foundation in:</strong>

          <div className="skills">
            <div className="skill-group">
              <span>Client-side</span>
              <ul>
                {code.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>

          {readMore && (
            <>
              <div className="skill-group">
                <strong>
                  I am also intrested how server side works & <br />
                  currently working with :
                </strong>
                <span>Server-side</span>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                </ul>
                <p>
                  I have learned through online resources such as Udemy,
                  YouTube, and official documentation, supported by consistent
                  hands-on practice. I am currently focused on improving my
                  skills and looking for opportunities as a web developer.
                </p>
              </div>
            </>
          )}
        </div>
      </Section>
      
        <button onClick={handleReadMore} className="read-more">
          {readMore ? "Close ..." : "Read more..."}
        </button>
      <Example />
    </>
  );
}

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CodeBar from "./components/CodeBar";
import ThemeProvider from "./context/ThemeContext";
import "./i18n"; // Import i18n
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <AboutMe />
      <Project />
    </ThemeProvider>
  );
}

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import ThemeProvider from "./context/ThemeContext";
import "./i18n"; // Import i18n

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
    </ThemeProvider>
  );
}

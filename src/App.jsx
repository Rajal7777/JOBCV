import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";
import "./i18n"; // Import i18n

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      
    </ThemeProvider>
  );
}

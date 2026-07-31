import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import WordPressWebsites from "./components/WordPressWebsites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordpress-websites" element={<WordPressWebsites />} />
    </Routes>
  );
}

export default App;

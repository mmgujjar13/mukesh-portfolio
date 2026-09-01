import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import WordPressWebsites from "./components/WordPressWebsites";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordpress-websites" element={<WordPressWebsites />} />
      <Analytics/>
    </Routes>
  );
}

export default App;

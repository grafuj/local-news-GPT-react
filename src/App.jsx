import { NewsProvider } from "./Context/NewsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Lobby } from "./Lobby";
import "./index.css";
import { LocalNewsPage } from "./LocalNewsPage";

function App() {
  return (
    <BrowserRouter>
          <Helmet>
            <title>Local News GPT</title>
            <link rel="icon" href="/dog.png" />
          </Helmet>
          
      <NewsProvider>
        <div>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/News" element={<LocalNewsPage />} />
          </Routes>
        </div>
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;

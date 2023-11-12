import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState([{ title: "testTitle", description: "testDesc" }]);
  const [loading, setLoading] = useState(false);

  return (
    <NewsContext.Provider value={{ cityInput, setCityInput, result, setResult, loading, setLoading }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  return useContext(NewsContext);
}

import { useState, useEffect } from "react";
import { NewsContext } from "../context/NewsContext";

export const NewsProvider = ({ children }) => {
  const storedNews = JSON.parse(localStorage.getItem("noticiasLocales")) || [];
  const [news, setNews] = useState(storedNews);
  const [newId, setNewId] = useState(storedNews.length);

  const addNew = (newNew) => {
    const updatedNews = [...news, newNew];
    setNews(updatedNews);

    localStorage.setItem("noticiasLocales", JSON.stringify(updatedNews));
  };

  const newIdUp = () => {
    setNewId((prev) => prev + 1);
  };
  useEffect(() => {
    localStorage.setItem("noticiasLocales", JSON.stringify(news));
  }, [news]);
  return <NewsContext.Provider value={{ news, addNew, newId, newIdUp }}>{children}</NewsContext.Provider>;
};

import { useEffect, useState } from "react";
import Noticia from "./Noticia";

export default function Lista() {
  const [apiNews, setApiNews] = useState([]);
  const KEY = import.meta.env.VITE_API_KEY;

  const getNews = async () => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${KEY}`, {
        method: "GET",
      });
      if (!response.ok) {
        console.error("Error en la respuesta", response.status);
      }
      const data = await response.json();
      setApiNews(data.results);
    } catch (error) {
      console.error("Error en la llamada:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
      {apiNews.length == 0 ? <p>No tienes ninguna noticia Guardada</p> : apiNews.map((noticia) => <Noticia key={noticia.id} titulo={noticia.title} noticia={noticia.noticia} url={noticia.url} />)}
    </div>
  );
}

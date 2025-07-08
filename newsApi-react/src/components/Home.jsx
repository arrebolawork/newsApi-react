import { useEffect, useState } from "react";
import Noticia from "./Noticia";

export default function Home() {
  const [localNews, setLocalNews] = useState([]);
  useEffect(() => {
    const noticiasLocales = JSON.parse(localStorage.getItem("noticiasLocales")) || [];
    setLocalNews(noticiasLocales);
  }, []);
  return (
    <div>
      <h1>Wellcome to LocalNews</h1>

      <div className='noticiaslocales'>
        {localNews.length == 0 ? <h2>Aun no has guardado ninguna noticia local</h2> : localNews.map((noticia) => <Noticia key={noticia.id} titulo={noticia.titulo} emoji={noticia.emoji} noticia={noticia.noticia} />)}
      </div>
    </div>
  );
}

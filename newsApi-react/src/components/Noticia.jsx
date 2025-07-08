import { Link } from "react-router-dom";

export default function Noticia(props) {
  return (
    <div className='noticiaCard'>
      {props.url === "" || props.url == undefined ? (
        <h2>{props.titulo}</h2>
      ) : (
        <h2>
          <Link to={props.url}>{props.titulo}</Link>
        </h2>
      )}

      <div>
        <p>{props.noticia}</p>
        <p>{props.emoji}</p>
      </div>
    </div>
  );
}

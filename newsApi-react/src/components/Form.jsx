import { useEffect, useState, useContext } from "react";
import Alerta from "./Alerta";
import { NewsContext } from "../context/NewsContext";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const initialState = { id: 0, titulo: "", noticia: "", emoji: "" };
  const Navigate = useNavigate();
  const iconos = [
    { id: 1, emoji: "🤣" },
    { id: 2, emoji: "😍" },
    { id: 3, emoji: "😊" },
    { id: 4, emoji: "😒" },
    { id: 5, emoji: "😁" },
    { id: 6, emoji: "👌" },
    { id: 7, emoji: "🤞" },
    { id: 8, emoji: "🙌" },
    { id: 9, emoji: "❤️" },
    { id: 10, emoji: "😃" },
    { id: 11, emoji: "😎" },
    { id: 12, emoji: "🤩" },
    { id: 13, emoji: "🤔" },
    { id: 14, emoji: "😏" },
    { id: 15, emoji: "😶‍🌫️" },
    { id: 16, emoji: "🤐" },
  ];

  const [newNew, setNewNew] = useState(initialState);
  const [mensajeError, setMensajeError] = useState("");
  const [color, setColor] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const { addNew, newId, newIdUp } = useContext(NewsContext);

  const handleFormInput = (event) => {
    const { name, value } = event.target;

    setNewNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMensaje = (msg, color) => {
    setMensajeError(msg);
    setColor(color);
    setMostrarMensaje(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newNew.titulo === "") return handleMensaje("El título está vacío", "red");
    if (newNew.noticia === "") return handleMensaje("La noticia está vacía", "red");
    if (newNew.emoji === "") return handleMensaje("Debes seleccionar un Emoji", "red");

    newIdUp();
    addNew({ ...newNew, id: newId });
    setNewNew(initialState);
    handleMensaje("Noticia registrada correctamente", "green");
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  };

  useEffect(() => {
    if (mostrarMensaje) {
      const timeout = setTimeout(() => setMostrarMensaje(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [mostrarMensaje]);

  return (
    <form className='formStyle' onSubmit={handleSubmit}>
      <div className='labelInput'>
        <label htmlFor='titulo'>Título</label>
        <input type='text' name='titulo' id='titulo' placeholder='Niko Williams se queda en el Athletic' value={newNew.titulo} onChange={handleFormInput} />
      </div>

      <div className='labelInput'>
        <label htmlFor='emoji'>Icono</label>
        <select name='emoji' id='emoji' value={newNew.emoji} onChange={handleFormInput}>
          <option value=''>Selecciona un emoji</option>
          {iconos.map((emoji) => (
            <option key={emoji.id} value={emoji.emoji}>
              {emoji.emoji}
            </option>
          ))}
        </select>
      </div>

      <div className='labelArea'>
        <label htmlFor='noticia'>Noticia</label>
        <textarea name='noticia' id='noticia' placeholder='Escribe la noticia...' value={newNew.noticia} onChange={handleFormInput}></textarea>
      </div>

      <input type='submit' value='Enviar' className='submitbutton' />
      {mostrarMensaje && <Alerta mensaje={mensajeError} color={color} />}
    </form>
  );
}

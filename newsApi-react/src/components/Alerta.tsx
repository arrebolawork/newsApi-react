export default function Alerta(props) {
  const estilado = {
    backgroundColor: props.color,
  };
  return (
    <div>
      <h3 style={estilado}>{props.mensaje}</h3>
    </div>
  );
}

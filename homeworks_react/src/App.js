
import './App.css';
const stylesForWrapper = {
  padding: "20px",
  textAlign: "center",
}

function App(props) {
  return (
    <div className="messageWrapper" style={stylesForWrapper}>
      <h1 className="title">Переданнный текст: <span style={{ fontStyle: "italic", color: "black" }}>{props.message}</span></h1>
    </div>
  );
}

export default App;
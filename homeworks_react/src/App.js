
import Message from './components/Message';
import './App.css';

const stylesForWrapper = {
  padding: "20px",
  textAlign: "center",
}

const messageText = "Now that we know how to render stuff, let's make our app a little more complex by introducing child elements. ";

function App() {
  return (<div className="messageWrapper" style={stylesForWrapper}>
    <Message message={messageText} />
  </div>)
}

export default App;
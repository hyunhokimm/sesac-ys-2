import "./App.css";
import CssModule from "./component/CssModule";
import OriginCss from "./component/OriginCss";

function App() {
  return (
    <div className="App">
      <OriginCss />
      <hr />
      <CssModule />
    </div>
  );
}

export default App;

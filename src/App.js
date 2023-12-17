import "./App.css";
import Explore from "./component/Explore";
import Learning from "./component/Learning";
import NavBar from "./component/NavBar";
import Recommended from "./component/Recommended";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
      </div>
      <div className="content">
        <Explore />
        <Learning />
        <Recommended />
      </div>
    </>
  );
}

export default App;

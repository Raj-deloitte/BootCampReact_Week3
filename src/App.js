import "./App.css";
import Explore from "./component/Explore";
import Learning from "./component/Learning";
import NavBar from "./component/NavBar";
import Recommended from "./component/Recommended";
import SideBar from "./component/SideBar";
function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <SideBar />
        <div className="main-container">
          <Explore />
          <Learning />
          <Recommended />
        </div>
      </div>
    </>
  );
}

export default App;

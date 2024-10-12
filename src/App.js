import "./App.css";
import Intro from "./components/Intro";
import Navigationbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* { intro Section } */}
      <div className="myBG">
        <Navigationbar />
        <Intro />
      </div>
      {/* {end of intro} */}

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;

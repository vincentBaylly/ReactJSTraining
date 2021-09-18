import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Title name="John Doe" />
      <Description />
      <Home />
    </div>
  );
}

export default App;

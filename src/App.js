import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Title name="John Doe" />
      <Description />
      <Description />
      <Description />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";

function App() {
  const handleChange = () => {
    console.log('123123');
  }
  return (
    <div className="App">
      <Header name="hih" age="33" email="dinh@aifmirst.com" onChange=/>
    </div>
  );
}

export default App;

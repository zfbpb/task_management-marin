import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Layout from "./Pages/Layout";


function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;

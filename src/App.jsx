import { useContext } from "react";
import "./App.scss";
import Layout from "./Pages/Layout";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Layout />
    </div>
  );
}

export default App;

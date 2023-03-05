import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes.js";

function App() {
  let router = useRoutes(routes)
  return router
}

export default App;

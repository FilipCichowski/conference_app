import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
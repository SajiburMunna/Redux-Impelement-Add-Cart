import Products from "./components/Products/Products";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Products></Products>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

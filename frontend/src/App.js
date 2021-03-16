import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//screen
import HomeScreen from "./screen/homescreen/HomeScreen";
import ProductScreen from "./screen/productscreen/ProductScreen";
import CartScreen from "./screen/cartscreen/CartScreen";

//component
import Navbar from "./component/navbar/Navbar";
import Backdrop from "./component/backdrop/Backdrop";
import SideDrawer from "./component/sidedrawer/SideDrawer";
import { useState } from "react";

function App() {

  const [sideToggle, setSideToggle]  = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

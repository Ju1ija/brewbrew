import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import Ingredients from "./components/Ingredients/Ingredients";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [data, setData] = useState([]);
  const getter = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers/random");
    const newData = await res.json();
    setData(newData[0]);
  };
  useEffect(() => {
    getter();
  }, []);

  return (
    <Router>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1 id="header">brew brew</h1>
        </Link>
      </div>
      <Switch>
        <Route path="/moreinfo">
          <MoreInfo tips={data.brewers_tips} pairing={data.food_pairing} />
        </Route>
        <Route path="/ingredients">
          <Ingredients ingredients={data.ingredients} />
        </Route>
        <Route path="/">
          <Home getter={getter} data={data} />
        </Route>
      </Switch>
      <Nav />
    </Router>
  );
};

export default App;

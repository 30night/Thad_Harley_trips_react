import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateTrip from "./CreateTrip";
import Edit from "./Edit";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Trip from "./Trip";
import NavBar from "./NavBar";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/trips");
    const trips = await response.json();
    console.log(trips);
    this.setState({ trips: trips });
  }

  render() {
    console.log("here");
    const trips = this.state?.trips;
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/trips" component={Trip} />
          <Route exact path="/trips/:id/edit" component={Edit} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trips/create" component={CreateTrip} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}
export default App;

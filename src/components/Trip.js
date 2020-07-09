import React from "react";
import { Link } from "react-router-dom";

class Trip extends React.Component {
  state = { trips: [] };

  getTrips = async () => {
    const response = await fetch("http://localhost:3000/trips");
    const trips = await response.json();
    this.setState({ trips: trips });
  };

  deleteTrip = async (id) => {
    console.log(id);
    console.log("delete");
    try {
      await fetch(`http://localhost:3000/trips/${id}`, {
        method: "DELETE",
      });
      this.getTrips();
    } catch (err) {
      console.error(err);
    }
  };
  renderTrips = () => {
    return this.state.trips.map((trip, index) => {
      return (
        <div key={index}>
          <h3>{trip.title}</h3>
          <p> {trip.name} </p>
          <p>{trip.description}</p>
          <div>
            <Link to={`/trips/${trip.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteTrip(trip.id)}>Delete</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  async componentDidMount() {
    this.getTrips();
  }

  render() {
    return (
      <div>
        <h1>this is trips page</h1>
        {this.renderTrips()}
      </div>
    );
  }
}

export default Trip;

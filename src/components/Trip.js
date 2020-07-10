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
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div class="tile is-child box is-6">
                <h3 className="title is-3">{trip.title}</h3>
                <p className="title is-5"> {trip.name} </p>
                <p className="subtitle is-6">{trip.description}</p>
                <footer className="card-footer">
                  <button className="button is-primary is-small">
                    <Link to={`/trips/${trip.id}/edit`}>Edit</Link>
                  </button>
                  <button className="button is-danger is-small">
                    <span onClick={() => this.deleteTrip(trip.id)}>Delete</span>
                  </button>
                </footer>
              </div>
            </div>
          </div>
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
        <h1 class="title is-1">Your Trips</h1>
        {this.renderTrips()}
      </div>
    );
  }
}

export default Trip;

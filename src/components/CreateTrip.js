import React from "react";

class CreateTrip extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trip: this.state }),
    });
    this.props.history.push("/trips");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Country</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.onInputChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>
          <input type="file" name="uploadFile" />
          <input type="submit" value="Submit" className="button is-success" />
        </form>
      </div>
    );
  }
}

export default CreateTrip;

// c77f3422cb0f4a9cbef0a0aabae3adc0

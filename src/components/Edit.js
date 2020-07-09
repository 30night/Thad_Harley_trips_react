import React from "react";

class Edit extends React.Component {
  state = {
    title: "",
    description: "",
    name: "",

    id: this.props.match.params.id,
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, title, name, description } = this.state;
    await fetch(`http://localhost:3000/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, name, description }),
    });
    this.props.history.push("/trips");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/trips/${id}`);
    const { title, name, description } = await response.json();
    this.setState({ title, name, description, loading: false });
  }

  render() {
    const { title, name, description } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Country</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
            value={title}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.onInputChange}
            value={name}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
            value={description}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Edit;

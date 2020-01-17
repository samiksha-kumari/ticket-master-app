import React from "react";

export default class DepartmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  } //onClick in label we will activated by 'for'
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.handleFormSubmit(formData);
  };
  //{this.handleSubmit.bind}

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label> <h4>Add Department</h4>
            <input type="text" required className="form-control" value={this.state.name} onChange={this.handleChange} id="name" />
          </label>
          <input className="btn btn-primary" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

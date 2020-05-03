import React from "react";
import TextChage from "../components/text-input/text-input.component";
import CustomButton from "../components/custom-button/custom-button.component";

import axios from "axios";

class CreateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      businessName: "",
      nic: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { displayName, businessName, nic } = this.state;
    const obj = {
      person_name: displayName,
      business_name: businessName,
      person_nic: nic
    };

    console.log(obj);
    axios
      .post("http://localhost:4000/business/add", obj)
      .then(res => console.log(res.data));

    this.setState({
      displayName: "",
      businessName: "",
      nic: ""
    });
  };

  render() {
    const { displayName, businessName, nic } = this.state;
    return (
      <div>
        <h5>Add New Business</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Person Name : </label>
            <TextChage
              type="text"
              name="displayName"
              className="form-control"
              value={displayName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Add Business Name : </label>
            <TextChage
              type="text"
              name="businessName"
              className="form-control"
              value={businessName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Add NIC Number : </label>
            <TextChage
              type="text"
              name="nic"
              className="form-control"
              value={nic}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <CustomButton
              type="submit"
              className="btn btn-info"
              value="Register Business"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateComponent;

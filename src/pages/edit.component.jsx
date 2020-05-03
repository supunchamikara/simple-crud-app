import React from "react";
import TextChage from "../components/text-input/text-input.component";
import CustomButton from "../components/custom-button/custom-button.component";
import axios from "axios";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      businessName: "",
      nic: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:4000/business/edit/" + id)
      .then(response => {
        console.log(response.data);
        this.setState({
          displayName: response.data.person_name,
          businessName: response.data.business_name,
          nic: response.data.person_nic
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const { displayName, businessName, nic } = this.state;
    const obj = {
      person_name: displayName,
      business_name: businessName,
      person_nic: nic
    };

    console.log(obj);
    axios
      .post("http://localhost:4000/business/update/" + id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/index");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, businessName, nic } = this.state;
    return (
      <div>
        <h5>Update Business</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Person Name : </label>
            <TextChage
              type="text"
              name="displayName"
              className="form-control"
              value={displayName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Business Name : </label>
            <TextChage
              type="text"
              name="businessName"
              className="form-control"
              value={businessName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>NIC Number : </label>
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
              value="Update Business"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditComponent;

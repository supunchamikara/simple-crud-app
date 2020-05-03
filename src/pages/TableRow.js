import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends React.Component {
    deleteStudent = () => {
    console.log(this.props.obj._id);

      axios.delete("http://localhost:4000/business/delete/" + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
      
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj.person_name}</td>
        <td>{this.props.obj.business_name}</td>
        <td>{this.props.obj.person_nic}</td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn info">
            Edit
          </Link>
          <Button
            onClick={this.deleteStudent}
            variant="outline-danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default TableRow;

import React from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";

class IndexComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      business: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/business")
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  tabRow() {
    return this.state.business.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h5>Business List</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>NIC Number</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </Table>
      </div>
    );
  }
}

export default IndexComponent;

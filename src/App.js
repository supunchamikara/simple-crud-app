import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import CreateComponent from "./pages/create.component";
import EditComponent from "./pages/edit.component";
import IndexComponent from "./pages/index.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar collapseOnSelect bg="info" variant="dark">
          <Navbar.Brand to={"/"}>
            <b>SIMPLE CRUD APPLICATION</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav><Link className='nav-link' to={"/"}>Home</Link></Nav>
              <Nav><Link className='nav-link' to={"/create"}>Create</Link></Nav>
              <Nav><Link className='nav-link' to={"/index"}>Index</Link></Nav>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <hr style={{margin: 5}} />
        <Switch>
          <Route exact path="/create" component={CreateComponent} />
          <Route exact path="/edit/:id" component={EditComponent} />
          <Route exact path="/index" component={IndexComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

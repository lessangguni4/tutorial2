import React, { Component } from "react";
import { FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import "../Css/Login.css";
import Logo from "../Assets/img/login.png";
import SweetAlert from "../Utils/SweetAlert";
export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
    this.Login = this.Login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Validate = this.Validate.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {
    var email = this.state.email;
    var password = this.state.password;
    var data={
      email: email,password: password
    }
    // console.log(email)
    // console.log(password)
    if (email === "") {
      // console.log("Email Tidak Boleh Kosong");
      SweetAlert.Error("Email Tidak Boleh Kosong")
    } else if (password === "") {
      // console.log("Password Tidak Boleh Kosong");
      SweetAlert.Error("Password Tidak Boleh Kosong")
    } else {
      // console.log("Sudah Lengkap");
      this.Login(data)
    }
  }
  Login(data) {
    console.log(data)
    SweetAlert.Succes('Berhasil Login')
    this.setState({redirectToReferrer:true})
  }
  render() {
    var email = this.state.email;
    var password = this.state.password;
    return (
      <div className="Login">
        <Row>
          <Col className="left-side">
            <FormLabel>Email</FormLabel>
            <FormControl
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="input"
              placeholder="Username/Email"
              type="text"
            />
            <FormLabel>Password</FormLabel>
            <FormControl
              name="password"
              value={password}
              onChange={this.handleInputChange}
              className="input"
              placeholder="Password"
              type="password"
            />
            <Button
              variant="outline-success"
              className="button"
              onClick={(e) => this.Validate()}
            >
              Login
            </Button>
            <p>
              Belum Punya Akun?
              <Button variant="link" href="register">
                Register
              </Button>
            </p>
          </Col>
          <Col className=".right-side">
            <div>
              <center>
                <img className="login-img" src={Logo} />
              </center>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

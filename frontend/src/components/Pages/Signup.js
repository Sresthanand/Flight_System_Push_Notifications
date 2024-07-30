import React, { Component } from "react";
import Axios from "axios";
import "./styles/Signin.css";
import { withRouter, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Signup extends Component {
  Swal = withReactContent(Swal);
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      phone: "",
      email: "",
      passport: "",
      password: "",
      confirmPass: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  encrypt = () => {
    let s = 4;
    let text = this.state.password;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.toUpperCase() === char) {
        let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
        result += ch;
      } else {
        let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
        result += ch;
      }
    }
    this.setState({
      password: result,
    });
  };

  register = (e) => {
    e.preventDefault();
    this.encrypt();
    if (this.state.password !== this.state.confirmPass) {
      Swal.fire("Password doesn't match confirm password!", "", "error");
    } else {
      Axios.post("http://localhost:5000/signup", {
        fname: this.state.fname,
        mname: this.state.mname,
        lname: this.state.lname,
        phone: this.state.phone,
        email: this.state.email,
        passport: this.state.passport,
        password: this.state.password,
      })
        .then((response) => {
          if (response.data.err) console.log(response.data.err);
          else Swal.fire("Registered Successfully!", "", "success");
          setTimeout(() => this.props.history.push("/CustomerSignin"), 500);
        })
        .catch(() => Swal.fire("Error in Signup!", "", "error"));
    }
  };

  render() {
    return (
      <div className="Auth-form-container bg-image">
        <form className="Auth-form" onSubmit={this.register}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  required
                  className="form-control mt-1"
                  placeholder="e.g Jane"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="mname"
                  required
                  className="form-control mt-1"
                  placeholder="e.g Doe"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  required
                  className="form-control mt-1"
                  placeholder="e.g Smith"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="form-control mt-1"
                  placeholder="e.g 923312613326"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control mt-1"
                  placeholder="e.g John@example.com"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Passport</label>
                <input
                  type="text"
                  name="passport"
                  required
                  className="form-control mt-1"
                  placeholder="Passport"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control mt-1"
                  placeholder="e.g rXhAz29$%1"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPass"
                  required
                  className="form-control mt-1"
                  placeholder=""
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Already have an account?{" "}
              <Link to="/CustomerSignin">
                <a> Login</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);

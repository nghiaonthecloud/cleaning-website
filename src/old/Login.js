import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (

            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <Form
                                                className="user"
                                                onSubmit={this.handleLogin}
                                                ref={c => {
                                                    this.form = c;
                                                }}
                                            >
                                                <div className="form-group">
                                                    <Input
                                                        type="text"
                                                        className="form-control form-control-user"
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={this.onChangeUsername}
                                                        validations={[required]} />
                                                </div>
                                                <div className="form-group">
                                                    <Input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={this.onChangePassword}
                                                        validations={[required]} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-primary btn-user btn-block"
                                                    disabled={this.state.loading}>
                                                    Login
                        </button>
                                                {this.state.message && (
                                                    <div className="form-group">
                                                        <div className="alert alert-danger" role="alert">
                                                            {this.state.message}
                                                        </div>
                                                    </div>
                                                )}
                                                <CheckButton
                                                    style={{ display: "none" }}
                                                    ref={c => {
                                                        this.checkBtn = c;
                                                    }}
                                                />
                                                <hr />
                                                <a href="" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw" /> Login with Google
                        </a>
                                                <a href="" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                        </a>
                                            </Form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

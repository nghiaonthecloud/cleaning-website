import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserServices from "../../../services/user.service";
import {email, minLength, phone, required} from '../shared/Validation';
import './Profile.css';
import AuthService from "../../../services/auth.service";


/** TODO:
 * - autofill
 * - request update
 */

export class Profile extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);

    let currentUser = AuthService.getCurrentUser();
    console.log(currentUser);

    this.state = {
      name: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      loading: false,
      hasError: false,
      message: ""
    };
  }

  passwordMatch = (value) => {
    if (value !== this.state.password) {
      return <small className="form-text text-danger">Mật khẩu không
        khớp</small>;
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }


  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      UserServices.updateProfile(
        this.state.name,
        this.state.phone,
        this.state.email,
        this.state.address,
        this.state.password
      ).then((res) => {
          console.log(res);
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
            hasError: true,
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
      <div>
        <div className="intro">
          <h2 className="text-left">Tài khoản của tôi</h2>
        </div>
        <div>
          <Form onSubmit={e => this.onFormSubmit(e)} ref={c => {
            this.form = c
          }}>
            <div className="row profile-row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="control-label">Họ tên</label>
                      <Input type="text"
                             className="form-control"
                             onChange={this.onChangeName}
                             validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="control-label">Số điện thoại</label>
                      <Input type="tel"
                             className="form-control"
                             onChange={this.onChangePhone}
                             validations={[required, phone]}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <Input type="email"
                         className="form-control"
                         autoComplete="on"
                         required
                         onChange={this.onChangeEmail}
                         validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Địa chỉ</label>
                  <Input type="text"
                         className="form-control"
                         autoComplete="off"
                         required
                         onChange={this.onChangeAddress}
                         validations={[required]}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label
                        className="control-label">Mật khẩu</label>
                      <Input type="password"
                             className="form-control"
                             autoComplete="off"
                             required
                             onChange={this.onChangePassword}
                             validations={[required, minLength]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="control-label">Xác nhận mật khẩu</label>
                      <Input type="password"
                             className="form-control"
                             required
                             onChange={this.onChangeConfirmPassword}
                             validations={[required, this.passwordMatch]}
                      />
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-12 content-right">
                    {
                      this.state.loading ? (
                        <button className="btn btn-primary btn-block" type="button"
                                disabled>
                          <div className="loader" id="loader-4">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </button>
                      ) : (
                        <button className="btn btn-default btn-active"
                                type="button">Lưu
                        </button>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <CheckButton style={{display: 'none'}} ref={c => {
              this.checkBtn = c
            }}/>
          </Form>
        </div>
      </div>
    );
  }
}

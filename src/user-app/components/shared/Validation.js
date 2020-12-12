import {isEmail, isEmpty, isMobilePhone} from "validator";
import React from "react";

const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">Bạn chưa điền ô này</small>;
  }
}

const phone = (value) => {
  if (!isMobilePhone(value)) {
    return <small className="form-text text-danger">Không phải số điện
      thoại</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
    return <small className="form-text text-danger">Định dạng email không
      đúng</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
    return <small className="form-text text-danger">Mật khẩu phải có tối thiểu 6
      ký tự</small>;
  }
}

export {required, phone, email, minLength};

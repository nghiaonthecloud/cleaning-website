import React from 'react';
import {Link} from "react-router-dom";

const ServiceAd = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service-counter text-center">
          <div className="col-md-4 col-sm-4">
            <div className="single-service-box">
              <div className="service-img">
                <img src={process.env.PUBLIC_URL + "/images/service/s1.png"}
                     alt="service-icon"/>
              </div>
              <div className="service-content">
                <h2>
                  <Link to="/#booking"> siêu tốc </Link>
                </h2>
                <p>
                  60 phút có ngay người đến giúp việc nhà.
                </p>
              </div>
            </div>
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-4">
            <div className="single-service-box">
              <div className="service-img">
                <img src={process.env.PUBLIC_URL + "/images/service/s2.png"}
                     alt="service-icon"/>
              </div>
              <div className="service-content">
                <h2>
                  <Link to="/#booking"> minh bạch </Link>
                </h2>
                <p>
                  Giá dịch vụ được hiển thị chi tiết, không phí phát sinh.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="single-service-box">
              <div className="statistics-img">
                <img src={process.env.PUBLIC_URL + "/images/service/s3.png"}
                     alt="service-icon"/>
              </div>
              <div className="service-content">
                <h2>
                  <Link to="/#booking"> an toàn </Link>
                </h2>
                <p>Đảm bảo an toàn với gói bảo hiểm cho Khách hàng người giúp
                  việc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAd;

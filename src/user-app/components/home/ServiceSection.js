import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "../shared/Button";

class ServiceSection extends Component {
  render() {

    const currencyOptions = {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }

    let renderedServices = this.props.services.map(
      (service) => (
        <div className="col-md-4 col-sm-6" key={service.id}>
          <div className="single-package-item">
            <div className="single-package-item-txt">
              <h3>{service.name}
              <span className="pull-right">
                {parseInt(service.cost).toLocaleString('vi-vn', currencyOptions)}
              </span>
              </h3>
              <div className="packages-para">
                <table>
                  <tbody>
                  <tr>
                    <td rowSpan={2}><img
                      src={process.env.PUBLIC_URL + "/images/packages/02.jpg"}
                      alt=""/>
                    </td>
                    <td>
                      <p>{service.description}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>50m2</p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="about-btn">
                <Link to="/#book">
                  <Button className="packages-btn">
                    Đặt ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    );

    return (
      <section id="services" className="packages">
        <div className="container">
          <div className="gallary-header text-center">
            <h2> giá dịch vụ</h2>
          </div>
          <div className="gallary-header text-muted">
            <div className="container">
              <p>
                <strong>Lưu ý:</strong>
              </p>
              <ul>
                <li>
                  Nếu thời gian thực hiện công việc Giúp việc nhà theo giờ nhiều
                  hơn 4 giờ, bạn nên đặt 2 người giúp việc
                  bằng
                  cách đăng
                  việc 2 lần.
                </li>
                <li>
                  Đối với Hà Nội và Hồ Chí Minh giá dịch vụ là 60,000vnd/h.
                </li>
                <li>
                  Đối với Khung giờ cao điểm (trước 8h00 và sau 19h00) và Thứ 7,
                  Chủ Nhật giá dịch vụ tăng 20%.
                </li>
                <li>
                  Giá mang tính chất tham khảo ở thời điểm hiện tại. Giá dịch vụ
                  có thể tự động điều chỉnh tùy vào khu
                  vực,
                  giờ cao điểm,
                  lễ tết.
                </li>
              </ul>
            </div>
          </div>

          <div className="packages-content">
            <div className="row">
              {/*<div className="col-md-4 col-sm-6">*/}
              {/*  <div className="single-package-item">*/}
              {/*    <div className="single-package-item-txt">*/}
              {/*      <h3>gói 2 giờ <span className="pull-right">120,000đ</span>*/}
              {/*      </h3>*/}
              {/*      <div className="packages-para">*/}
              {/*        <table>*/}
              {/*          <tbody>*/}
              {/*          <tr>*/}
              {/*            <td rowSpan={2}><img*/}
              {/*              src={process.env.PUBLIC_URL + "/images/packages/02.jpg"}*/}
              {/*              alt=""/>*/}
              {/*            </td>*/}
              {/*            <td>*/}
              {/*              <p>02 phòng</p>*/}
              {/*            </td>*/}
              {/*          </tr>*/}
              {/*          <tr>*/}
              {/*            <td>*/}
              {/*              <p>50m2</p>*/}
              {/*            </td>*/}
              {/*          </tr>*/}
              {/*          </tbody>*/}
              {/*        </table>*/}
              {/*      </div>*/}
              {/*      <div className="about-btn">*/}
              {/*        <Link to="/#book">*/}
              {/*          <button className="about-view packages-btn">Đặt ngay*/}
              {/*          </button>*/}
              {/*        </Link>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {renderedServices}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServiceSection;

import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class PromoSection extends Component {

  constructor(props) {
    super(props);
    this.makeTimer = this.makeTimer.bind(this);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    this.timerHandle = setInterval(this.makeTimer, 1000);
  }

  makeTimer() {
    let now = new Date();
    let endTime = new Date("2020-12-31");
    let timeLeft = (endTime - now) / 1000;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  render() {
    return (
      <section className="discount-offer" id="promotion">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center">
                <h2>
                  Nhận ngay 30% giảm giá trong lần đặt dịch vụ đầu tiên
                </h2>
                <div className="campaign-timer">
                  <div id="timer">
                    <div className="time time-after" id="days">
                      {this.state.days} <span className="camp">ngày</span>
                    </div>
                    <div className="time time-after" id="hours">
                      {this.state.hours} <span className="camp">giờ</span>
                    </div>
                    <div className="time time-after" id="minutes">
                      {this.state.minutes} <span className="camp">phút</span>
                    </div>
                    <div className="time" id="seconds">
                      {this.state.seconds} <span className="camp">giây</span>
                    </div>
                  </div>
                </div>
                <div className="about-btn">
                  <Link to="/#book">
                    <button className="about-view discount-offer-btn">Đặt lịch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>
    );
  }
}

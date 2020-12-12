import React from 'react';
import {Link} from "react-router-dom";

const PromoSection = () => {
    return (
        < section className="discount-offer" id="promotion" >
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
                                        <span />
                                    </div>
                                    <div className="time time-after" id="hours" />
                                    <div className="time time-after" id="minutes" />
                                    <div className="time" id="seconds" />
                                </div>
                            </div>
                            <div className="about-btn">
                                <Link to="/#book">
                                    <button className="about-view discount-offer-btn">Đặt lịch</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ section>
    );
}

export default PromoSection;

import React from 'react';
import {Link} from "react-router-dom";
import Button from "../shared/Button";

const AboutUs = () => {
    return (
        <section id="home" className="about-us">
            <div className="container">
                <div className="about-us-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single-about-us">
                                <div className="about-us-txt">
                                    <h2>Giúp việc nhà Theo Giờ</h2>
                                    <p>
                                        Bạn có thể chăm sóc ngôi nhà của mình một cách hoàn hảo khi
                                        đặt lịch Giúp việc nhà theo giờ trên HouseClean –
                                        Nhanh chóng, Tiện lợi và Tiết kiệm chi phí. Nay đã có mặt
                                        tại Tp. Hồ Chí Minh, Hà Nội, Đà Nẵng, Hải Phòng, Nha Trang,
                                        Đà Lạt, Biên Hòa, Cần Thơ và Bình Dương.
                                        </p>
                                    <div className="about-btn">
                                        <Link to="/#book">
                                            <Button className="about-view">Đặt lịch</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0">
                            <div className="single-about-us" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs;

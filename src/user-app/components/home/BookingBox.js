import React, {Component} from 'react';
import Button from '../shared/Button';

export class BookingBox extends Component {
    render() {
        return (
            <section id="booking" className="travel-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single-travel-boxes" id="book">
                                <div className="tab-para">
                                    <div className="row">
                                        <h2>Đặt lịch</h2>
                                    </div>
                                    <div className="row">
                                        <form acceptCharset="UTF-8">
                                            <div className="row">
                                                <div className="row form-row p-0">
                                                    <div className="col-sm-3 px-0">
                                                        <div className="row form-row">
                                                            <input type="checkbox" defaultValue={0} />0 phòng ngủ
                                                            </div>
                                                        <div className="row form-row">
                                                            <input type="checkbox" defaultValue={1} />1 phòng ngủ
                      </div>
                                                        <div className="row form-row">
                                                            <input type="checkbox" defaultValue={1} />1 phòng ngủ
                      </div>
                                                        <div className="row form-row">
                                                            <input type="checkbox" defaultValue={1} />1 phòng ngủ
                      </div>
                                                    </div>
                                                    <div className="col-sm-9 col-12 px-0">
                                                        <div className="row form-row">
                                                            <div className="col-12">
                                                                <input className="form-control form-control-lg" placeholder="Tên người đặt" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-12">
                                                                <input className="form-control form-control-lg" placeholder="Địa chỉ" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-sm-6 col-12 px-0">
                                                                <input className="form-control form-control-lg " type="date" />
                                                            </div>
                                                            <div className="col-sm-6 col-12 px-0">
                                                                <select className="form-control form-control-lg">
                                                                    <option value="07:00">7:00 AM</option>
                                                                    <option value="07:30">7:30 AM</option>
                                                                    <option value="08:00">8:00 AM</option>
                                                                    <option value="08:30">8:30 AM</option>
                                                                    <option value="09:00">9:00 AM</option>
                                                                    <option value="09:30">9:30 AM</option>
                                                                    <option value="10:00">10:00 AM</option>
                                                                    <option value="10:30">10:30 AM</option>
                                                                    <option value="11:00">11:00 AM</option>
                                                                    <option value="11:30">11:30 AM</option>
                                                                    <option value="12:00">12:00 PM</option>
                                                                    <option value="12:30">12:30 PM</option>
                                                                    <option value="13:00">1:00 PM</option>
                                                                    <option value="13:30">1:30 PM</option>
                                                                    <option value="14:00">2:00 PM</option>
                                                                    <option value="14:30">2:30 PM</option>
                                                                    <option value="15:00">3:00 PM</option>
                                                                    <option value="15:30">3:30 PM</option>
                                                                    <option value="16:00">4:00 PM</option>
                                                                    <option value="16:30">4:30 PM</option>
                                                                    <option value="17:00">5:00 PM</option>
                                                                    <option value="17:30">5:30 PM</option>
                                                                    <option value="18:00">6:00 PM</option>
                                                                    <option value="18:30">6:30 PM</option>
                                                                    <option value="19:00">7:00 PM</option>
                                                                    <option value="19:30">7:30 PM</option>
                                                                    <option value="20:00">8:00 PM</option>
                                                                    <option value="20:30">8:30 PM</option>
                                                                    <option value="21:00">9:00 PM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-12">
                                                                <input placeholder="Số điện thoại" maxLength={14} className="form-control form-control-lg" size={14} type="tel" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-12">
                                                                <input placeholder="Email" className="form-control form-control-lg" type="email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <Button className="book-btn book-btn-form">Đặt lịch</Button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <small className="text-muted">
                                                        <div className="text-center">
                                                            Với nhà như trên, số giờ dọn khuyến nghị là
                                                            <u>
                                                                <select className="recommend-hours">
                                                                    <option value={3.0}>3 giờ</option>
                                                                    <option value="3.5">3.5 giờ</option>
                                                                    <option value={4.0}>4 giờ</option>
                                                                    <option value="4.5">4.5 giờ</option>
                                                                    <option value={5.0}>5 giờ</option>
                                                                    <option value="5.5">5.5 giờ</option>
                                                                    <option value={6.0}>6 giờ</option>
                                                                    <option value="6.5">6.5 giờ</option>
                                                                    <option value={7.0}>7 giờ</option>
                                                                    <option value="7.5">7.5 giờ</option>
                                                                    <option value={8.0}>8 giờ</option>
                                                                    <option value="8.5">8.5 giờ</option>
                                                                    <option value={9.0}>9 giờ</option>
                                                                    <option value="9.5">9.5 giờ</option>
                                                                    <option value={10.0}>10 giờ</option>
                                                                </select>
                                                            </u>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

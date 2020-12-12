import React, {Component} from "react";

import UserService from "../../../services/user.service";
import {HistoryItem} from './HistoryItem'
import './History.css';
import Spinner from "../shared/Spinner";

const BOOKING_STATUS = {
    NEW: 1,
    CONFIRMED: 2,
    DONE: 3,
    CANCELED: 4
}

export class History extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            hasError: false,
            message: "",
            historyItems: [],
            filter: null
        }

        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount() {
        UserService.getHistory()
            .then(res => {
                this.setState({
                    isLoading: false,
                    hasError: false,
                    historyItems: res.data.data
                });
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    hasError: true,
                    message: err.toString()
                });
            })
    }

    onFilter(value) {
        this.setState({
            filter: value
        });
    }

    render() {

        let filteredItems = this.state.historyItems.filter((item) => {
            if (this.state.filter)
                return item.status === this.state.filter;
            return true;
        })

        return (
            <div>
                <div className="intro">
                    <h2 className="text-left">Lịch sử dịch vụ</h2>
                    <p className="text-left">Lịch sử các đơn đặt dọn nhà của bạn.</p>
                </div>
                <div>
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active col-md-3" role="presentation">
                                <a className="text-center"
                                   href="#tab-1" role="tab"
                                   data-toggle="tab"
                                   onClick={() => this.onFilter(null)}
                                >Tất cả</a>
                            </li>
                            <li role="presentation" className="col-md-3">
                                <a className="text-center"
                                   href="#tab-2" role="tab"
                                   data-toggle="tab"
                                   onClick={() => this.onFilter(BOOKING_STATUS.CONFIRMED)}
                                >Đã đặt lịch</a>
                            </li>
                            <li role="presentation" className="col-md-3">
                                <a className="text-center"
                                   href="#tab-3" role="tab"
                                   data-toggle="tab"
                                   onClick={() => this.onFilter(BOOKING_STATUS.DONE)}
                                >Đã hoàn thành</a>
                            </li>
                            <li role="presentation" className="col-md-3">
                                <a className="text-center"
                                   href="#tab-4" role="tab"
                                   data-toggle="tab"
                                   onClick={() => this.onFilter(BOOKING_STATUS.CANCELED)}
                                >Đã hủy</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" role="tabpanel" id="tab-1">
                                <div className="tab">
                                    {this.state.isLoading ? (
                                        <Spinner/>
                                    ) : this.state.hasError ? (
                                        <p>{this.state.message}</p>
                                    ) : (filteredItems.map((item) =>
                                        (<HistoryItem item={item} key={item.id}/>)
                                    ))
                                    }


                                    {/*<Pagination aria-label="Page navigation example">*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink first href="#" />*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink previous href="#" />*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink href="#">*/}
                                    {/*      1*/}
                                    {/*    </PaginationLink>*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink href="#">*/}
                                    {/*      2*/}
                                    {/*    </PaginationLink>*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink href="#">*/}
                                    {/*      3*/}
                                    {/*    </PaginationLink>*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink href="#">*/}
                                    {/*      4*/}
                                    {/*    </PaginationLink>*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink href="#">*/}
                                    {/*      5*/}
                                    {/*    </PaginationLink>*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink next href="#" />*/}
                                    {/*  </PaginationItem>*/}
                                    {/*  <PaginationItem>*/}
                                    {/*    <PaginationLink last href="#" />*/}
                                    {/*  </PaginationItem>*/}
                                    {/*</Pagination>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

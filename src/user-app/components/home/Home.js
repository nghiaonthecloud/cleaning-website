import React, {Component} from 'react';

import AboutUs from './AboutUs';
import {BookingBox} from './BookingBox';
import PromoSection from './PromoSection';
import ServiceAd from './ServiceAd';
import ServiceSection from './ServiceSection';
import {TestimonialSection} from './TestimonialSection';
import GeneralService from '../../../services/general.service';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: [],
      serviceErrorMessage: null
    }
  }

  componentDidMount() {
    GeneralService.getServices()
      .then(res => {
        this.setState({
          services: res.data.data
        });
      })
      .catch(err => {
        this.setState({
          serviceErrorMessage: err.toString()
        })
      });
  }

  render() {
    return (
      <React.Fragment>
        <AboutUs/>
        <BookingBox location={this.props.location} services={this.state.services}/>
        <ServiceAd/>
        <PromoSection/>
        {this.state.serviceErrorMessage || this.state.services.length === 0 ? (
          <p className="text-center">{this.state.serviceErrorMessage}</p>
        ) : <ServiceSection services={this.state.services}/>}
        <TestimonialSection/>
      </React.Fragment>
    )
  }
}

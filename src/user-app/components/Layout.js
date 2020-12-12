import React, {Component} from 'react';
import {Navbar} from './Navbar';
import {Footer} from './Footer';


export class Layout extends Component {

    render() {
        return (
            <div>
                <Navbar user={this.props.user} setUser={this.props.setUser} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

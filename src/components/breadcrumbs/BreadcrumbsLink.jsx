import React from 'react';
import { Link } from 'react-router-dom';

export default class BreadcrumbsLink extends React.Component{
    render(){
        return this.props.active ?
            <span className="active">{this.props.children}</span>
            :
            <Link to={this.props.to} className="hover:underline focus:underline focus:outline-none">{this.props.children}</Link>;        
    }
};
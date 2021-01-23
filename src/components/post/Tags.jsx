import React from 'react';
import Nav from '../navs/Nav';

class Tags extends React.Component{
    render(){
        return(
            <Nav className={this.props.className} title="Štítky" titleClass="sr-only" ulClass="flex items-center" liClass="mr-5 p-1 bg-red-100 hover:bg-red-200 hover:underline text-red-900 text-sm font-sans font-light">
                {this.props.children}                      
            </Nav>
        );
    }
}

export default Tags;
import React from 'react';
import Nav from '../navs/Nav';

class Tags extends React.Component{
    render(){
        return(
            <Nav className={this.props.className} title="Štítky" titleClass="sr-only" ulClass="flex flex-wrap md:text-nowrap items-center" liClass="mr-5 mt-5 md:mt-0 p-1 bg-red-100 hover:bg-red-200 hover:underline text-red-900 text-xs md:text-sm font-sans font-light">
                {this.props.children}                      
            </Nav>
        );
    }
}

export default Tags;
import React from 'react';
import Nav from '../navs/Nav';

class Breadcrumbs extends React.Component{
    render(){              
        return(
            <Nav
                id="breadcrumbs"
                className="mb-5"
                ulClass="flex flex-row justify-start"
                liClass="px-2 font-sans"                       
            >                                  
                {this.props.children}             
            </Nav>
        );
    }
}

Breadcrumbs.defaultProps = {
    active: 'Aktivní',    
    separator: '/',    
}

export default Breadcrumbs;
import React from 'react';
import { BlogContext } from '../../context/BlogContext';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class Head extends React.Component{
    render(){
        return(
            <Helmet>                                
                {this.props.pageTitle ? 
                    <title>{this.props.pageTitle} &ndash; {this.context.meta.name} </title> : 
                    <title>{this.context.meta.name}</title>
                }               
            </Helmet>
        );
    }
}

Head.contextType = BlogContext;

Head.propTypes = {
    pageTitle: PropTypes.string,    
}

export default Head;

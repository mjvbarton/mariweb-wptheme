import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

export default class Content extends React.Component{
    render(){
        const colors = this.props.dark ? 'dark-colors' : 'light-colors';
        return( 
            <div id="container" className={'md:mx-32 md:mb-32 px-5 md:px-10 py-5 ' + colors}>
                {this.props.breadcrumbs}
                {this.props.children}
            </div>
        );
    }
};

Content.propTypes = {
    dark: PropTypes.bool,
    breadcrumpbs: PropTypes.objectOf(Breadcrumbs),
}
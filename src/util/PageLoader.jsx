import React from 'react';
import PropTypes from 'prop-types';
import PageError from '../templates/PageError';

class PageLoader extends React.Component{
    render(){
        return(
            <div className="fixed top-0 w-full w-min-full h-full h-min-full bg-gray-900 z-50">   
                {!this.props.error &&             
                    <div className="text-white text-6xl text-center mt-40 animate-bounce">
                        {this.props.loadingText}
                    </div>                 
                } 
                {this.props.error &&
                    <PageError title="Chyba aplikace" description={this.props.error} />
                }             
            </div>
        );
    }
};

PageLoader.propTypes = {
    loadingText: PropTypes.string.isRequired,
    error: PropTypes.string,
};  

PageLoader.defaultProps = {
    loadingText: "Loading...",
    error: null,
};

export default PageLoader;
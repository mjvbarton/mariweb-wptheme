import React from 'react';
import PropTypes from 'prop-types';
import PatreonButton from './PatreonButton';

class PatreonInvoice extends React.Component{
    render(){
        return(
            <div id='donate' className='mb-10'>
                <h2 className='font-sans font-medium text-2xl text-white'>{this.props.title}</h2>
                <p className='text-sm md:text-base'>
                    {this.props.description}
                </p>
                <PatreonButton url={this.props.url} /> 
            </div>
        );
    }
}

PatreonInvoice.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default PatreonInvoice;
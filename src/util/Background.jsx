import React from 'react';
import PropTypes from 'prop-types';

/**
 * Background of the page.
 * @author mjvbarton
 * @since 1.0.0
 */
class Background extends React.Component{
    render(){
        return(
            <div className='mt-10 md:mt-0 md:fixed z-10'>
                <img src={encodeURI(this.props.src)} alt={this.props.alt} className='object-cover w-screen z-0'/>
            </div>
        );
    }
}

Background.propTypes = {
    /**
     * Source URL of the image
     */
    src: PropTypes.string.isRequired,

    /**
     * Alternative text of the image
     */
    alt: PropTypes.string.isRequired,
};

Background.defaultProps = {
    src: 'https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg',
    alt: 'sample background image',
}

export default Background;

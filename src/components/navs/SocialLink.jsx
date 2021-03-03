import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Social link icon used for social sites integration.
 * @author mjvbarton
 * @since 1.0.0
 */
class SocialLink extends React.Component{
    render(){
        return(         
            <Tippy content={this.props.siteName} placement='bottom'>
                <a href={this.props.url} target='__blank' rel='noopener noreferrer' className={this.props.className}>
                    <FontAwesomeIcon icon={this.props.icon} />
                    <span className='sr-only'>{this.props.siteName}</span>
                </a>
            </Tippy>                     
        );
    }
}

SocialLink.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.object.isRequired,
    siteName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,        
}

export default SocialLink;
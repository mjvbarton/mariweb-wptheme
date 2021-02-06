import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

/**
 * Social link icon used for social sites integration.
 * @author mjvbarton
 * @since 1.0.0
 */
class SocialLink extends React.Component{
    render(){
        return(         
            <Tippy content={this.props.siteName} placement='bottom'>
                <a href={this.props.url} target='__blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={this.props.icon} />
                    <span className='sr-only'>{this.props.siteName}</span>
                </a>
            </Tippy>                     
        );
    }
}

export default SocialLink;
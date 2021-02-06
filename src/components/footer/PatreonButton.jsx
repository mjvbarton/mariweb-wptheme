import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';

/**
 * Button for Patreon subscribing
 * @author mjvbarton
 * @since 1.0.0
 * @todo Implement Patreon integration
 */
class PatreonButton extends React.Component{
    render(){
        return(
            <div id='patreon-button-placeholder' className='p-3 mx-auto my-5 bg-red-500 hover:bg-red-600 hover:text-gray-300 max-w-max text-white font-patreon cursor-pointer'>
                <FontAwesomeIcon icon={faPatreon} className='mr-2'/>
                Become a Patron!
            </div>
        );
    }
}

PatreonButton.propTypes = {
    /**
     * Specifies the URL for the profile
     */
    url: PropTypes.string.isRequired
}

export default PatreonButton;
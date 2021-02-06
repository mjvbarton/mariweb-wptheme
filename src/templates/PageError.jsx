import React from 'react';
import PropTypes from 'prop-types';

/**
 * Fallback UI of the application.
 * @author mjvbarton
 * @since 1.0.0
 * @todo Move this to ./util
 */
class PageError extends React.Component{
    render(){
        return( 
            <main id="error" className="typography md:mx-auto md:max-w-2xl px-10 py-20 md:mb-32 dark-colors font-mono text-sm md:text-base font-extralight">
                <h1 className="text-center">{this.props.title}</h1>
                <p className="text-center">{this.props.description}</p>
            </main>
        )
    }
}

PageError.propTypes = {
    /**
     * The title of the error.
     * @default 'Chyba aplikace'
     */
    title: PropTypes.string,

    /**
     * The required description of the error.
     */
    description: PropTypes.string.isRequired,
}

PageError.defaultProps = {
    title: 'Chyba aplikace'
}

export default PageError;
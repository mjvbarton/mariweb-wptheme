import React from 'react';
import PropTypes from 'prop-types';

/**
 * Loading UI when the application loads on start.
 * @author mjvbarton
 * @since 1.0.0
 */
class PageLoader extends React.Component{
    render(){
        return(
            <div className='fixed top-0 w-full w-min-full h-full h-min-full bg-gray-900 z-50'>   
                {!this.props.error &&             
                    <div className='text-white text-6xl text-center mt-40 animate-bounce'>
                        {this.props.loadingText}
                    </div>                 
                } 
                {this.props.error &&
                    <>
                        <div className='text-white text-6xl text-center mt-40'>
                            Chyba aplikace
                        </div>            
                        <div className='text-white text-2xl text-center mt-5 font-mono'>
                            {this.props.error.description}
                        </div>
                    </>     
                }             
            </div>
        );
    }
};

PageLoader.propTypes = {
    /**
     * Text that is displayed on loading.
     * @default 'Načítám...'
     */
    loadingText: PropTypes.string,

    /**
     * The description of the error.
     */
    error: PropTypes.string,
};  

PageLoader.defaultProps = {
    loadingText: 'Načítám...',
    error: null,
};

export default PageLoader;
import React from 'react';
import { BlogContext } from '../context/BlogContext';

/**
 * Background of the page.
 * @author mjvbarton
 * @since 1.0.0
 */
class Background extends React.Component{
    render(){
        let context = this.context;
        return(
            <div id='pageBackground' className='mt-10 md:mt-0 md:fixed z-10'>
                {context.backgrounds.page &&
                    <img src={encodeURI(context.backgrounds.page)} alt='Pozadí vlastní stránky' className='object-cover w-screen z-0'/>
                }                
                {context.backgrounds.default && !context.backgrounds.page &&
                    <img src={encodeURI(context.backgrounds.default)} alt='Výchozí pozadí' className='object-cover w-screen z-0'/>
                }
            </div>
        );
    }
}

// Background.propTypes = {
//     /**
//      * Source URL of the image
//      */
//     src: PropTypes.string.isRequired,

//     /**
//      * Alternative text of the image
//      */
//     alt: PropTypes.string.isRequired,
// };

// Background.defaultProps = {
//     src: 'https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg',
//     alt: 'sample background image',
// }

Background.contextType = BlogContext;

export default Background;

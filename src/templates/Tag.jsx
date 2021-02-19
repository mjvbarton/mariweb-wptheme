import React from 'react';
import PostContainer from '../components/post/PostContainer';

/**
 * Represents article tag from Wordpress taxonomy.
 * @todo Implement API logic for tags.
 * @author mjvbarton
 * @since 1.0.0
 */
class Tag extends React.Component{
    render(){
        return(
            <>                            
                <section id='tag' className='md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 bg-black bg-opacity-80 text-gray-200 font-mono text-sm md:text-base font-extralight'>                    
                    <h1 className='text-center font-sans font-light uppercase text-4xl md:text-5xl my-5'>#Štítek 1</h1>                
                    <h2 className='sr-only'>Popis štítku</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus enim, bibendum eu neque quis, aliquam tincidunt mi. Vivamus quis hendrerit sapien. Quisque semper mauris ut massa commodo rhoncus. Curabitur nec velit eget augue rhoncus ullamcorper vel id ex. Integer suscipit nisl ac quam vestibulum feugiat. Integer bibendum mauris suscipit aliquet ornare. In vestibulum odio ut tortor malesuada, et porttitor velit imperdiet.
                    </p>
                </section>                                            
                <PostContainer id='posts' title='Články se štítkem' />                
            </>
        );
    }
}

export default Tag;
import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';

class PostSummary extends React.Component{
    render(){
        return(
            <div className="flex flex-wrap md:flex-nowrap items-start my-10">        
                <div className="md:mx-5 justify-self-stretch w-full md:w-1/3 my-3 md:my-0">
                    <img src="https://jordicomas.org/wp-content/uploads/2019/01/Sample-16x9-image_1080px.jpg" alt="heading of article"/>
                </div>    
                <article className="md:mx-5 font-serif font-light w-full md:w-2/3 my-3 md:my-0 px-5 md:px-0">                    
                    <h3 className="text-red-800 font-sans font-medium text-3xl mb-2">
                        <Link to="/clanky/clanek-1" className="hover:text-red-600 hover:underline">Článek 1</Link>
                    </h3>                            
                        <PostMeta className="mb-5"/>       
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus enim, bibendum eu neque quis, aliquam tincidunt mi. Vivamus quis hendrerit sapien. Quisque semper mauris ut massa commodo rhoncus. Curabitur nec velit eget augue rhoncus ullamcorper vel id ex. Integer suscipit nisl ac quam vestibulum feugiat. Integer bibendum mauris suscipit aliquet ornare. In vestibulum odio ut tortor malesuada, et porttitor velit imperdiet. Duis varius, odio auctor posuere tincidunt, lectus dolor semper odio, vel tempus arcu arcu sit amet quam. Etiam ac justo iaculis, tristique nulla eu, tempus ipsum. Nam quis eros pharetra, accumsan massa sit amet, porta felis. 
                            <span className="text-gray-400 mx-1">[...]</span>
                        </p>                                           
                        <Link to="/clanky/clanek-1" className="block my-5 p-3 bg-red-800 text-white max-w-max font-sans font-medium hover:bg-red-600">Pokračovat ve čtení</Link>                                                                                               
                    </article>
                </div>
        );
    }
}

export default PostSummary;
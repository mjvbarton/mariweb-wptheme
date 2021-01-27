import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';
import ReactHtmlParser from 'react-html-parser';

class PostSummary extends React.Component{
    render(){
        return(
            <div className="flex flex-wrap md:flex-nowrap items-start my-10">        
                <div className="md:mx-5 justify-self-stretch w-full md:w-1/3 my-3 md:my-0">
                    <img src="https://jordicomas.org/wp-content/uploads/2019/01/Sample-16x9-image_1080px.jpg" alt="heading of article"/>
                </div>    
                <article className="md:mx-5 font-mono font-light w-full md:w-2/3 my-3 md:my-0 px-5 md:px-0">                    
                    <h3 className="text-red-800 font-sans font-medium text-4xl mb-2">
                        <Link to="/clanky/clanek-1" className="hover:text-red-600 hover:underline">Článek 1</Link>
                    </h3>                            
                        <PostMeta author={this.props.author} created={this.props.created} className="mb-5"/>       
                        <p className="typography light-colors">
                            {ReactHtmlParser(this.props.excerpt)}                         
                            <span className="text-gray-400 mx-1">[...]</span>
                        </p>                                           
                        <Link to={`/clanky/${this.props.url}`} className="block my-5 p-3 bg-red-800 text-white max-w-max text-xl font-sans font-medium hover:bg-red-600">Pokračovat ve čtení</Link>                                                                                               
                    </article>
                </div>
        );
    }
}

PostSummary.defaultProps = {
    author: "The Author",
    created: new Date(),
}

export default PostSummary;
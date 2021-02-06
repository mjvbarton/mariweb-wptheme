import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';
import ReactHtmlParser from 'react-html-parser';

/**
 * Represents the summary of the post used by PostContainer
 * @see PostContainer
 * @author mjvbarton
 * @since 1.0.0
 * @todo Implement PropTypes.
 */
class PostSummary extends React.Component{
    render(){
        return(
            this.props.empty ?
            <div className='flex flex-wrap md:flex-nowrap items-start justify-items-start my-10'>        
                <div className='md:mx-5 justify-self-stretch w-full md:w-1/3 my-3 md:my-0'>
                    <div className='md:m-3 w-full h-full min-h-full min-w-full p-32 animate-pulse bg-gray-300'/>
                </div>    
                <div className='md:mx-5 font-mono font-light w-full md:w-2/3 my-3 md:my-0 px-5 md:px-0'>                    
                    <div className='p-4 w-2/5 min-w-2/5 mb-2 animate-pulse bg-gray-300' />                                                                   
                    <div className='p-2 w-1/2 min-w-1/2 mb-5 animate-pulse bg-gray-300'/>       
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>       
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>       
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>       
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>                                                                        
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>      
                    <div className='p-2 w-full min-w-full mb-2 animate-pulse bg-gray-300'/>      
                    <div className='block my-5 p-7 min-w-1/5 w-1/5 animate-pulse bg-gray-300'/>
                </div>
            </div>
            :
            <div className='flex flex-wrap md:flex-nowrap items-start my-10'>        
                <div className='md:mx-5 justify-self-stretch w-full md:w-1/3 my-3 md:my-0'>
                    <img src={this.props.imgUri} alt='náhledový obrázek článku'/>
                </div>    
                <article className='md:mx-5 font-mono font-light w-full md:w-2/3 my-3 md:my-0 px-5 md:px-0'>                    
                    <h3 className='text-red-800 font-sans font-medium text-4xl mb-2'>
                        <Link to={`/clanky/${this.props.slug}`} className='hover:text-red-600 hover:underline'>{this.props.title}</Link>
                    </h3>                            
                        <PostMeta author={this.props.author} created={this.props.created} className='mb-5'/>       
                        <p className='typography light-colors'>
                            {ReactHtmlParser(this.props.excerpt)}                         
                            <span className='text-gray-400 mx-1'>[...]</span>
                        </p>                                           
                        <Link to={`/clanky/${this.props.slug}`} className='block my-5 p-3 bg-red-800 text-white max-w-max text-xl font-sans font-medium hover:bg-red-600'>Pokračovat ve čtení</Link>                                                                                               
                    </article>
                </div>
        );
    }
}

PostSummary.defaultProps = {
    title: 'Článek',
    excerpt: 'Maiores ut neque minima ut dolorem odit aut et excepturi qui veritatis est tempora fuga qui laudantium eos ad aut inventore perferendis sed doloribus occaecati possimus sint quasi aut cum aut in voluptate.',
    author: 'The Author',
    created: new Date(),
}

export default PostSummary;
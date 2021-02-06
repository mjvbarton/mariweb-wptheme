import axios from 'axios';
import React from 'react';
import PostContainer from '../components/post/PostContainer';
import ReactHtmlParser from 'react-html-parser';
import PostMeta from '../components/post/PostMeta';
import TagLink from '../components/post/TagLink';
import Tags from '../components/post/Tags';
import { BlogContext } from '../context/BlogContext';

/**
 * Represents the post of the Wordpress blog
 * @author mjvbarton
 * @since 1.0.0
 */
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,                 
        }
    }

    /**
     * Loads the post on mount.
     */
    componentDidMount(){        
        this.loadPost()
    }

    /**
     * Reloads the post if the URI changes.
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.postSlug !== prevProps.match.params.postSlug){
            this.loadPost();
        }
    }

    /**
     * Loads the post from Wordpress REST API.
     */
    loadPost(){
        let context = this.context;
        this.setState({
            post: null,            
        }, () => {
            axios.get(`${context.apiBaseUrl}/better-rest-endpoints/v1/posts/${this.props.match.params.postSlug}`)
            .then((response) => {
                if(Array.isArray(response.data)){
                    context.handleError({
                        title: 'Článek nenalezen',
                        description: 'Článek, který jste hledali neexistuje. Nejspíš jste zadali špatnou adresu URL.'
                    });
                } else {
                    this.setState({
                        post: response.data,
                    });
                }
            })
            .catch((error) => {            
                console.error(error);
                context.handleError({
                    description: 'V aplikaci se vyskytla neočekávaná chyba. Zobrazte konzoli pro více informací.'
                });
            });
        });        
    }

    render(){
        return(
            <>                                               
                {this.state.post &&                  
                    <section id='postContent' className='typography light-colors md:mx-32 px-5 md:px-10 py-5 md:mb-32'>
                        {/* 
                            Post header with title and meta information (author name, date created) and post image if present
                        */}
                        <header id='postHeader'>
                            <h1>{this.state.post.title}</h1>
                            <PostMeta className='mb-2' author={this.state.post.author_nicename} created={this.state.post.date}/>     
                            <figure>
                                <img src={this.state.post.media.large} alt='Úvodní obrázek článku'/>
                            </figure>
                        </header>

                        {/* 
                            The content of the post
                        */}
                        {this.state.post.blocks && this.state.post.blocks.map((block) => (block.blockName !== null) && ReactHtmlParser(block.innerContent))}

                        {/* 
                            The tags associated with this post
                        */}
                        <Tags className='mt-10 text-xs md:text-base'>
                            {this.state.post.tags.map((tag) =>
                                <TagLink title={tag.name} slug={tag.slug} key={tag.id} />
                            )}
                        </Tags>
                    </section>  
                }               

                {/* 
                    Related posts
                */}
                {this.state.post &&                                        
                    <PostContainer id='relatedPosts' title='Související články' className='bg-white h-full py-10 md:px-10' exclude={this.state.post.id} categoryName={this.state.post.categories[0].slug} perPage={3}/> 
                }                         
            </>
        );
    }
}

Post.contextType = BlogContext;

export default Post;
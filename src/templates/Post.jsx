import axios from 'axios';
import React from 'react';
import PostContainer from '../components/post/PostContainer';
import ReactHtmlParser from 'react-html-parser';
import PostMeta from '../components/post/PostMeta';
import TagLink from '../components/post/TagLink';
import Tags from '../components/post/Tags';
import { BlogContext } from '../context/BlogContext';
import Content from '../util/Content';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from '../components/breadcrumbs/BreadcrumbsLink';
import Head from '../components/head/Head';

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
            category: null,              
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
                    }, () => {
                        if(!context.backgrounds.page){
                            this.loadBackground();
                        }
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

    loadBackground(){
        let context = this.context;
        axios.get(`${context.apiBaseUrl}/wp/v2/categories`, {
            params: {
                slug: this.state.post.categories[0].slug
            }
        })
        .then((categoryResponse) => {
            this.setState({
                category: categoryResponse.data[0],
            }, () => {
                if(this.state.category.taxonomy_background){
                    context.setPageBackground(this.state.category.taxonomy_background);
                }
            });
        });
    }

    render(){
        return(
            <>                                               
                {this.state.post &&     
                    <Content breadcrumbs={
                        <Breadcrumbs>
                            <BreadcrumbsLink to='/'>Domů</BreadcrumbsLink>
                            /                            
                            <BreadcrumbsLink to={this.state.post.categories[0].link.split(this.context.meta.url)[1]}>{this.state.post.categories[0].name}</BreadcrumbsLink>
                            /
                            <BreadcrumbsLink active>{this.state.post.title}</BreadcrumbsLink>
                        </Breadcrumbs>
                    }>                        
                        <Head pageTitle={this.state.post.title} />                        
                        <section id='postContent' className='typography'>
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
                        <PostContainer id='relatedPosts' title='Související články' className='bg-white h-full py-10 md:px-10' exclude={this.state.post.id} categoryName={this.state.post.categories[0].slug} perPage={3}/> 
                    </Content>
                }                                    
            </>
        );
    }
}

Post.contextType = BlogContext;

export default Post;
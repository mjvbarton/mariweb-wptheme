import axios from 'axios';
import React from 'react';
import PostSummary from './PostSummary';
import PropTypes from 'prop-types';
import { BlogContext } from '../../context/BlogContext';

/**
 * Represents post loader with optional pagination
 * @author mjvbarton
 * @since 1.0.0
 */
class PostContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            posts: null,
            page: this.props.page,
            noMorePages: false,
        }
        
        this.loadPosts = this.loadPosts.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    /**
     * Loads posts on mount.
     */
    componentDidMount(){
        this.loadPosts();
    }
    
    /**
     * Loads more posts when page number changes
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState){
        if(this.state.page !== prevState.page){
            this.loadPosts();
        }
    }

    /**
     * Loads posts     
     */
    loadPosts(){
        let context = this.context;
        axios.get(`${context.apiBaseUrl}/better-rest-endpoints/v1/posts`, {
            params: {
                category_name: this.props.categorySlug,
                content: this.props.content,
                exclude: this.props.exclude,                
                order: this.props.order,
                orderby: this.props.orderby,
                page: this.state.page,
                per_page: this.props.perPage,
                tag: this.props.tagId,
            }
        }).then((response) => {
            this.setState({
                isLoading: false,                
                noMorePages: Array.isArray(response.data) && response.data.length === 0,
                posts: Array.isArray(this.state.posts) ? this.state.posts.concat(response.data) : response.data, 
            });
        });
    }

    /**
     * Increments page number
     * @param Event e the event from the DOM
     */
    nextPage(e){
        e.preventDefault();
        this.setState({
            isLoading: true,
            page: this.state.noMorePages ? this.state.page : this.state.page + 1,            
        });
    }

    render(){
        return(
            <aside id={this.props.id} className='bg-white min-h-full py-10 md:px-10'>
                <h2 className='font-sans font-normal text-3xl text-red-800 text-center'>{this.props.title}</h2>                
                {this.state.posts && this.state.posts.map((post) => 
                    <PostSummary key={post.id} title={post.title} author={post.author_nicename} excerpt={post.excerpt} created={post.date} imgUri={post.media.large} slug={post.slug}/>                    
                )}         
                {this.state.posts && this.props.paginate && !this.state.noMorePages && !this.state.isLoading &&
                    <button className='block my-5 mx-auto p-3 bg-red-800 text-white max-w-max text-2xl font-sans font-medium hover:bg-red-600' onClick={this.nextPage}>Načíst další články</button>       
                }
                {this.state.posts && this.props.paginate && this.state.noMorePages &&
                    <div className='block my-5 mx-auto p-3 max-w-max text-xl font-sans font-medium text-gray-600'>Již jste načetli všechny dostupné články.</div>
                }
                {((this.state.posts) == null || this.state.isLoading) &&
                    <div>
                        <PostSummary empty/>
                        <PostSummary empty/>
                    </div>
                }
            </aside>
        );
    }
}

PostContainer.propTypes = {
    /**
     * Filters posts based on the category slug if filled.     
     */
    categorySlug: PropTypes.string,

    /**
     * Shows/hides content from responses. 
     * @default false
     */
    content: PropTypes.bool.isRequired,

    /**
     * Sets the class for the whole container.
     */
    className: PropTypes.string,

    /**
     * Excludes post with id given if filled.
     * @default null
     */
    exclude: PropTypes.number,    

    /**
     * The DOM id of the container.
     */
    id: PropTypes.string,

    /**
     * Specifies how to order posts.
     * @default 'DESC'
     */
    order: PropTypes.oneOf(['ASC', 'DESC']),

    /**
     * Specifies the parameter of the post that is used to order posts.
     * @default 'date'
     */
    orderby: PropTypes.oneOf(['title', 'date']),

    /**
     * Specifies the page that container shows.
     * @default 1
     */
    page: PropTypes.number.isRequired,

    /**
     * Enables/disables pagination.
     * @default false
     */
    paginate: PropTypes.bool.isRequired,

    /**
     * Specifies how many posts belong to a single page.
     * @default 10
     */
    perPage: PropTypes.number.isRequired, 

    /**
     * Filters posts based on the tag id if filled.
     */
    tagId: PropTypes.number,  

    /**
     * Specifies the title of the container
     * @default 'Články'
     */
    title: PropTypes.string.isRequired,
}

PostContainer.defaultProps = {
    content: false,
    page:1,
    order: 'DESC',
    orderby: 'date',
    paginate: false,
    perPage: 10,
    title: 'Články'
}

PostContainer.contextType = BlogContext;

export default PostContainer;
import axios from 'axios';
import React from 'react';
import PostSummary from './PostSummary';
import PropTypes from 'prop-types';

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

    componentDidMount(){
        this.loadPosts();
    }
    
    componentDidUpdate(prevProps, prevState){
        if(this.state.page !== prevState.page){
            this.loadPosts();
        }
    }

    loadPosts(){
        axios.get('https://wordpress.localhost/wp-json/better-rest-endpoints/v1/posts', {
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

    nextPage(e){
        e.preventDefault();
        this.setState({
            isLoading: true,
            page: this.state.noMorePages ? this.state.page : this.state.page + 1,            
        });
    }

    render(){
        return(
            <aside id={this.props.id} className={this.props.className}>
                <h2 className="font-sans font-normal text-3xl text-red-800 text-center">{this.props.title}</h2>                
                {this.state.posts && this.state.posts.map((post) => 
                    <PostSummary key={post.id} title={post.title} author={post.author_nicename} excerpt={post.excerpt} created={post.date} imgUri={post.media.thumbnail} slug={post.slug}/>                    
                )}         
                {this.state.posts && this.props.paginate && !this.state.noMorePages && !this.state.isLoading &&
                    <button className="block my-5 mx-auto p-3 bg-red-800 text-white max-w-max text-2xl font-sans font-medium hover:bg-red-600" onClick={this.nextPage}>Načíst další články</button>       
                }
                {this.state.posts && this.props.paginate && this.state.noMorePages &&
                    <div className="block my-5 mx-auto p-3 max-w-max text-xl font-sans font-medium text-gray-600">Již jste načetli všechny dostupné články.</div>
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
    categorySlug: PropTypes.string,
    content: PropTypes.bool.isRequired,
    className: PropTypes.string,
    exclude: PropTypes.number,    
    id: PropTypes.string,
    order: PropTypes.oneOf(['ASC', 'DESC']),
    orderby: PropTypes.oneOf(['title', 'date']),
    page: PropTypes.number.isRequired,
    paginate: PropTypes.bool.isRequired,
    perPage: PropTypes.number.isRequired,  
    tagId: PropTypes.number,  
    title: PropTypes.string.isRequired,
}

PostContainer.defaultProps = {
    content: false,
    page:1,
    order: 'DESC',
    orderby: 'date',
    paginate: false,
    perPage: 10,
    title: "Články"
}

export default PostContainer;
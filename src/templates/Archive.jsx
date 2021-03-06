import React from 'react';
import qs from 'qs';
import axios from 'axios';
import PostSummary from '../components/post/PostSummary';
import { BlogContext } from '../context/BlogContext';
import Content from '../util/Content';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from '../components/breadcrumbs/BreadcrumbsLink';
import Head from '../components/head/Head';

class Archive extends React.Component{
    constructor(props){
        super(props);       
            
        this.state = {
            query: qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q,
            isLoading: false,
            posts: null,
        }

        this.loadPosts = () => {
            this.setState({
                isLoading: true
            }, () => {
                let context = this.context;
                axios.get(`${context.apiBaseUrl}/better-rest-endpoints/v1/search`, {
                    params: {
                        search: this.state.query,
                    }
                })
                .then((response) => {
                    this.setState({
                        isLoading: false,
                        posts: response.data,
                    });
                    context.setPageBackground(context.backgrounds.default);
                });    
            });            
        };
    }

    componentDidMount(){
        this.loadPosts();
    }

    componentDidUpdate(prevProps, prevState){        
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q;
        const prevQuery = qs.parse(prevProps.location.search, { ignoreQueryPrefix: true }).q;

        console.log(query, prevQuery);

        if(query !== prevQuery){
            this.setState({
                query: query,
            }, this.loadPosts);            
        }
    }

    render(){
        return(
            <Content breadcrumbs={
                <Breadcrumbs>
                    <BreadcrumbsLink to='/'>Domů</BreadcrumbsLink>
                    /
                    <BreadcrumbsLink active>Archiv příspěvků</BreadcrumbsLink>
                </Breadcrumbs>
            }>
                <Head pageTitle={`Vyhledat "${this.state.query}"`} />
                <section id="search" className="bg-white">
                    <h1 className="text-5xl text-red-800 font-sans mb-5">Archiv příspěvků</h1>                    
                    <h2 className="text-3xl text-red-800 font-sans text-center">Výsledky hledání pro "{this.state.query}"</h2>
                    {this.state.isLoading && 
                        <>
                            <PostSummary empty />
                            <PostSummary empty />
                            <PostSummary empty />
                        </>
                    }
                    {this.state.posts && this.state.posts.map((post) => 
                        <PostSummary key={post.id} title={post.title} author={post.author_nicename} excerpt={post.excerpt} created={post.date} imgUri={post.media.large} slug={post.slug} />
                    )}
                    {Array.isArray(this.state.posts) && this.state.posts.length === 0 &&
                        <div className="block my-5 mx-auto p-3 max-w-max text-xl font-sans font-medium text-gray-600">Nebyly nalezeny žádné články</div>                    
                    }
                </section>                                
            </Content>
        );
    }
}

Archive.contextType = BlogContext;

export default Archive;
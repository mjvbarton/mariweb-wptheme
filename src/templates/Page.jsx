import axios from 'axios';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from '../components/breadcrumbs/BreadcrumbsLink';
import Head from '../components/head/Head';
import { BlogContext } from '../context/BlogContext';
import Content from '../util/Content';

/**
 * Represents Wordpress page
 * @author mjvbarton
 * @since 1.0.0 
 * @todo Implement custom background for page
 */
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,                    
        }                
    }

    /**
     * Loads the page on mount.
     */
    componentDidMount(){        
        this.loadPost()
    }
    
    /**
     * Reloads the page if the page URL changes.
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.pageSlug !== prevProps.match.params.pageSlug){
            this.loadPost();
        }
    }

    /**
     * Method for loading the page frop Wordpress REST API
     */
    loadPost(){
        let context = this.context;
        this.setState({
            post: null,                       
        }, () => {
            axios.get(`${context.apiBaseUrl}/better-rest-endpoints/v1/pages/${this.props.match.params.pageSlug}`)
            .then((response) => {
                if(Array.isArray(response.data)){
                    context.handleError({
                        title: 'Stránka nenalezena',
                        description: 'Stránka, kterou jste hledali neexistuje. Nejspíš jste zadali špatnou adresu URL.',
                    })
                }
                this.setState({
                    post: response.data,                                
                },() => {
                    if(this.state.post.media){
                        context.setPageBackground(this.state.post.media.large);
                    }
                });
            })
            .catch((error) => {            
                console.error('Unexpected error caught:', error);                
                context.handleError('V aplikaci se vyskytla neočekávaná chyba. Zobrazte konzoli pro více informací.');
            });            
        });        
    }

    /**
     * Renders the page content
     */
    render(){
        return(
            <>                                
                {this.state.post &&   
                    <Content breadcrumbs={
                        <Breadcrumbs>
                            <BreadcrumbsLink to='/'>Domů</BreadcrumbsLink>
                            /
                            <BreadcrumbsLink active>{this.state.post.title}</BreadcrumbsLink>
                        </Breadcrumbs>
                    }>
                        <Head pageTitle={this.state.post.title} />
                        <section id='pageContent' className='min-h-max px-5 md:px-10 py-5 typography'>                    
                            <h1 className='text-center'>{this.state.post.title}</h1>                            
                            {this.state.post.blocks && this.state.post.blocks.map((block) => 
                                (block.blockName !== null) ? ReactHtmlParser(block.innerContent) : null                                
                            )}
                        </section>
                    </Content>
                }                                    
            </>
        );
    }
}

Page.contextType = BlogContext;

export default Page;
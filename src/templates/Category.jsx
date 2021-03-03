import React from 'react';
import PostContainer from '../components/post/PostContainer';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import { BlogContext } from '../context/BlogContext';
import Content from '../util/Content';
import BreadcrumbsLink from '../components/breadcrumbs/BreadcrumbsLink';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Head from '../components/head/Head';

/**
 * Represents article category from Wordpress taxonomy.
 * @author mjvbarton
 * @since 1.0.0
 * @todo Implement custom background for the category.
 */
class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category: null,        
        }

        this.loadCategory = this.loadCategory.bind(this);
    }

    /**
     * Loads category on mount.
     */
    componentDidMount(){
        this.loadCategory();
    }

    /**
     * Reloads category when location changes.
     * @param {*} prevProps previous props
     * @param {*} prevState previous state
     */
    componentDidUpdate(prevProps, prevState){        
        if(prevProps.match.params.categorySlug !== this.props.match.params.categorySlug){
            this.setState({
                category: null,                
            }, () => {
                this.loadCategory();
            })
        }
    }

    /**
     * Loads category from Wordpress REST API
     */
    loadCategory(){
        let context = this.context;
        axios.get(`${context.apiBaseUrl}/wp/v2/categories`, {
            params: {
                slug: encodeURIComponent(this.props.match.params.categorySlug),                
            }
        })
        .then((response) => {
            if(Array.isArray(response.data) && response.data.length === 1){
                const category = response.data[0];
                this.setState({
                    category: category,
                }, () => {
                    if(this.state.category.taxonomy_background){
                        context.setPageBackground(this.state.category.taxonomy_background);
                    } else {
                        context.setPageBackground(context.backgrounds.default);
                    }
                });
            } else {
                context.handleError({
                    title: 'Rubrika nenalezena',
                    description: 'Rubrika, kterou jste hledali neexistuje. Nejspíš jste zadali špatnou adresu URL.'
                });
            }
        })
        .catch((error) => {
            console.error(error);
            context.handleError({
                description: 'V aplikaci se vyskytla neočekávaná chyba. Zobrazte konzoli pro více informací.'
            });
        });
    }

    render(){
        return(
            <>                                
                {this.state.category &&
                    <section id='category' className='md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 typography dark-colors font-mono text-sm md:text-base font-extralight'>                    
                        <h1 className='text-center'>{this.state.category.name}</h1>                                                            
                        <p>
                            {ReactHtmlParser(this.state.category.description)}                                    
                        </p>
                    </section>                        
                    
                }
                {this.state.category &&
                    <Content breadcrumbs={
                        <Breadcrumbs>
                            <BreadcrumbsLink to='/'>Domů</BreadcrumbsLink>
                            /
                            <BreadcrumbsLink active>{this.state.category.name}</BreadcrumbsLink>
                        </Breadcrumbs>
                    }>                        
                        <Head pageTitle={this.state.category.name} />                        
                        <PostContainer id='posts' categorySlug={this.state.category.slug} paginate title='Nejnovější články v rubrice' className='bg-white h-full py-10 md:px-10'/>
                    </Content>
                }                                                
            </>
        );
    }
}

Category.contextType = BlogContext;

export default Category;
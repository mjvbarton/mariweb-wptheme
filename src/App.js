import React from 'react';
import Category from './templates/Category';
import Page from './templates/Page';
import Post from './templates/Post';
import {Switch, Route, withRouter} from 'react-router-dom';
import FrontPage from './templates/FrontPage';
import Tag from './templates/Tag';
import ScrollToTop from './util/ScrolToTop';
import PageLoader from './util/PageLoader';
import { BlogContext, BlogInfo } from './context/BlogContext';
import axios from 'axios';
import Header from './templates/Header';
import Background from './util/Background';
import Footer from './templates/Footer';
import PageError from './templates/PageError';
import Archive from './templates/Archive';

/**
 * Mari's blog client application.
 * @author mjvbarton
 * @since 1.0.0
 */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            meta: BlogInfo.meta,
            primaryMenu: BlogInfo.primaryMenu,
            socialSites: BlogInfo.socialSites,
            backgrounds: BlogInfo.backgrounds,
            error: null,
            frontpage: BlogInfo.frontpage,
            footer: BlogInfo.footer,
        };

        this.handleError = this.handleError.bind(this);  
        this.setPageBackground = this.setPageBackground.bind(this);      
    }

    /**
     * Loads info on mount
     */
    componentDidMount(){
        /*
         * Loading blog info
         */
        axios.get(BlogInfo.apiBaseUrl)
        .then((response) => {
            this.setState({
                meta: {
                    name: response.data.name,
                    description: response.data.description,
                    url: response.data.url,
                    home: response.data.home,
                    gmt_offset: response.data.gmt_offset,
                    timezone_string: response.data.timezone_string,
                }
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: {
                    description: 'Nezdařilo se načíst základní informace o blogu. Pro více informací zobrazte konzoli.'
                },
            });
        })
        
        /*
         * Loading primary menu
         */
        axios.get(`${BlogInfo.apiBaseUrl}/better-rest-endpoints/v1/menus/location/primary`)
        .then((response) => {
            this.setState({
                primaryMenu: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: {
                    description: 'Nezdařilo se načíst hlavní menu. Pro více informací zobrazte konzoli.'
                },
            });
        })

        /*
         * Loading Social sites
         */
        axios.get(`${BlogInfo.apiBaseUrl}/mariweb-wptheme/v1/all`)
        .then((response) => {
            console.log(response);
            this.setState({
                socialSites: response.data.socialSites,
                frontpage: response.data.frontpage,
                footer: response.data.footer,
                backgrounds: {
                    default: response.data.backgrounds.default,
                    page: this.state.backgrounds.page,                    
                }
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: {
                    description: 'Nezdařilo se načíst sociální sítě. Pro více informací zobrazte konzoli.',
                },
            });
        });
    }   
    
    /**
     * Clears errors when window.location changes
     * @param {*} prevProps previous props
     * @param {*} prevState previous state
     */
    componentDidUpdate(prevProps, prevState){
        if(prevProps.location !== this.props.location){
            this.setState({
                error: null,                
            });
        }        
    }
    
    /**
     * Handle errors in components
     * @param {*} error 
     */
    handleError(error){
        this.setState({
            error: error,
        });
    }   
    
    setPageBackground(backgroundURL){
        this.setState({
            backgrounds: {
                default: this.state.backgrounds.default,
                page: backgroundURL,
            }
        });
    }

    render(){        
        return (
            <div className='App'>
                {(!this.state.meta || !this.state.socialSites || !this.state.primaryMenu || !this.state.frontpage) ?
                    <PageLoader error={this.state.error} />
                    :
                    <BlogContext.Provider value={{
                        apiBaseUrl: BlogInfo.apiBaseUrl, 
                        backgrounds: this.state.backgrounds,                       
                        setPageBackground: this.setPageBackground,
                        error: this.state.error,
                        footer: this.state.footer,                    
                        handleError: this.handleError,
                        meta: this.state.meta,
                        primaryMenu: this.state.primaryMenu,
                        socialSites: this.state.socialSites,
                        frontpage: this.state.frontpage,
                    }}>                        
                        
                            <Header />
                            <Background alt="Pozadí stránky" src={this.state.backgrounds.default}/>
                            <ScrollToTop /> 
                            <div id='pageContent' className='md:absolute md:z-20 md:mt-32 flex-col space-y-0 min-w-full min-h-full'>
                                <main id='content' className='flex-grow min-h-screen'>
                                    {this.state.error 
                                    ? 
                                        <PageError title={this.state.error.title ? this.state.error.title : 'Chyba aplikace'} description={this.state.error.description} />
                                    :
                                        <Switch>                
                                            <Route path='/rubriky/:categorySlug' component={Category} />
                                            <Route path='/clanky/:postSlug' component={Post} />
                                            <Route path='/stitky/:tagSlug' component={Tag} />
                                            <Route path='/vyhledat' component={Archive} />                                            
                                            <Route path='/:pageSlug' component={Page} />
                                            <Route exact path='/' component={FrontPage} />
                                        </Switch>                                   
                                    }
                                </main>
                                <Footer />
                            </div>                                                                              
                    </BlogContext.Provider>                                    
                }                
            </div>
            
        );
    }
}

export default withRouter(App);

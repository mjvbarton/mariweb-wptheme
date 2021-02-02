import React from "react";
import Category from "./templates/Category";
import Page from "./templates/Page";
import Post from "./templates/Post";
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import FrontPage from "./templates/FrontPage";
import Tag from "./templates/Tag";
import ScrollToTop from "./util/ScrolToTop";
import Contact from "./templates/Contact";
import PageLoader from "./util/PageLoader";
import { BlogContext, BlogInfo } from "./context/BlogContext";
import axios from "axios";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            meta: BlogInfo.meta,
            primaryMenu: BlogInfo.primaryMenu,
            socialSites: BlogInfo.socialSites,
            error: null,
        };
    }

    componentDidMount(){
        /**
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
                error: "Nezdařilo se načíst základní informace o blogu. Pro více informací zobrazte konzoli.",
            });
        })
        
        /**
         * Loading primary menu
         */
        axios.get(BlogInfo.apiBaseUrl + '/better-rest-endpoints/v1/menus/location/primary')
        .then((response) => {
            this.setState({
                primaryMenu: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: "Nezdařilo se načíst hlavní menu. Pro více informací zobrazte konzoli."
            });
        })

        /**
         * Loading Social sites
         */
        axios.get(BlogInfo.apiBaseUrl + '/mariweb-wptheme/v1/socialsites')
        .then((response) => {
            this.setState({
                socialSites: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: "Nezdařilo se načíst sociální sítě. Pro více informací zobrazte konzoli."
            });
        });
    }
    render(){        
        return (
            <div className="App">
                {(!this.state.meta || !this.state.socialSites || !this.state.primaryMenu) ?
                    <PageLoader error={this.state.error} />
                    :
                    <BlogContext.Provider value={{
                        apiBaseUrl: BlogInfo.apiBaseUrl,
                        meta: this.state.meta,
                        primaryMenu: this.state.primaryMenu,
                        socialSites: this.state.socialSites,
                    }}>
                        <BrowserRouter>
                            <ScrollToTop />                    
                            <Switch>                
                                <Route path="/rubriky/:categorySlug" component={Category} />
                                <Route path="/clanky/:postSlug" component={Post} />
                                <Route path="/stitky/:tagSlug" component={Tag} />
                                <Route exact path="/kontakt" component={Contact} />
                                <Route path="/:pageSlug" component={Page} />
                                <Route exact path="/" component={FrontPage} />
                            </Switch>
                        </BrowserRouter>            
                    </BlogContext.Provider>                                    
                }                
            </div>
            
        );
    }
}

export default App;

import React from "react";
import Category from "./templates/Category";
import Page from "./templates/Page";
import Post from "./templates/Post";
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import FrontPage from "./templates/FrontPage";
import Tag from "./templates/Tag";
import ScrollToTop from "./util/ScrolToTop";
import Contact from "./templates/Contact";

function App() {
    return (
        <div className="App">
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
            </div>
        
    );
}

export default App;

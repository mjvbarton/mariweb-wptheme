import axios from 'axios';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Footer from './Footer';
import Header from './Header';
import PageError from './PageError';

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,
            errorTitle: null,
            errorDescription: null,
        }
    }

    componentDidMount(){        
        this.loadPost()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.pageSlug !== prevProps.match.params.pageSlug){
            this.loadPost();
        }
    }

    loadPost(){
        this.setState({
            post: null,
            errorTitle: null,
            errorMessage: null,
        }, () => {
            axios.get(`https://wordpress.localhost/wp-json/better-rest-endpoints/v1/pages/${this.props.match.params.pageSlug}`)
            .then((response) => {
                this.setState({
                    post: Array.isArray(response.data) ? false : response.data,                                
                });
            })
            .catch((error) => {            
                console.error('Unexpected error caught:', error);
                this.setState({
                    errorTitle: 'Chyba aplikace',
                    errorDescription: 'V aplikaci se vyskytla neočekávaná chyba. Zobrazte konzoli pro více informací.',                                  
                })
            });            
        });        
    }
    render(){
        return(
            <div>
                <Header />
                <div className="mt-10 md:mt-0 md:fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="md:absolute md:z-20 md:mt-32 flex-row space-y-0 min-w-full min-h-full">
                    {this.state.post &&   
                        <main id="page" className="md:mx-32 min-h-max px-5 md:px-10 py-5 md:mb-32 typography dark-colors">                    
                        <h1 className="text-center">{this.state.post.title}</h1>                            
                        {this.state.post.blocks && this.state.post.blocks.map((block) => {
                            if(block.blockName !== null){
                                return ReactHtmlParser(block.innerContent);
                            } else {
                                return '';
                            }
                        })}  
                    </main>  
                    }                  
                    {this.state.errorTitle && 
                        <PageError title={this.state.errorTitle} description={this.state.errorDescription} />
                    }
                    {(this.state.post) != null && !this.state.post  &&                    
                        <PageError title="Stránka nenalezena" description="Stránka, kterou jste hledali neexistuje. Nejspíš jste zadali špatnou adresu." />
                    }        
                    
                    {(this.state.post) != null  &&               
                        <Footer />                    
                    }
                </div>
            </div>
        );
    }
}

export default Page;
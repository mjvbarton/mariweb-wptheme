import axios from 'axios';
import React from 'react';
import PostContainer from '../components/post/PostContainer';
import ReactHtmlParser from 'react-html-parser';
import PostMeta from '../components/post/PostMeta';
import TagLink from '../components/post/TagLink';
import Tags from '../components/post/Tags';
import Footer from './Footer';
import Header from './Header';
import PageError from './PageError';

class Post extends React.Component{
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
        if(this.props.match.params.postSlug !== prevProps.match.params.postSlug){
            this.loadPost();
        }
    }

    loadPost(){
        this.setState({
            post: null,
            errorTitle: null,
            errorMessage: null,
        }, () => {
            axios.get(`https://wordpress.localhost/wp-json/better-rest-endpoints/v1/posts/${this.props.match.params.postSlug}`)
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
                
                    <div className="md:absolute md:z-20 md:mt-32 flex-col place-items-start space-y-0 min-w-full min-h-full">  
                    {this.state.post &&                  
                            <main id="post" className="typography light-colors md:mx-32 px-5 md:px-10 py-5 md:mb-32">                    
                                <h1>{this.state.post.title}</h1>
                                    <PostMeta className="mb-2" author={this.state.post.author_nicename} created={this.state.post.date}/>     
                                    <figure>
                                        <img src={this.state.post.media.large} alt="Úvodní obrázek článku"/>
                                    </figure>                               
                                    {this.state.post.blocks && this.state.post.blocks.map((block) => {
                                        if(block.blockName !== null){
                                            return ReactHtmlParser(block.innerContent);
                                        } else {
                                            return '';
                                        }
                                    })}                                                    
                                    <Tags className="mt-10 text-xs md:text-base">
                                        {this.state.post.tags.map((tag) =>
                                            <TagLink title={tag.name} slug={tag.slug} key={tag.id} />
                                        )}
                                    </Tags>                        
                            </main>     
                }
                {this.state.errorTitle && 
                    <PageError title={this.state.errorTitle} description={this.state.errorDescription} />
                }
                {(this.state.post) != null && !this.state.post  &&                    
                    <PageError title="Článek nenalezen" description="Článek, který jste hledali neexistuje. Nejspíš jste zadali špatnou adresu." />
                }        
                {this.state.post &&                                        
                        <PostContainer id="relatedPosts" title="Související články" className="bg-white h-full py-10 md:px-10" exclude={this.state.post.id} categoryName={this.state.post.categories[0].slug} perPage={3}/> 
                }
                {(this.state.post) != null  &&               
                        <Footer />                    
                }
                    </div>
                
            </div>
        );
    }
}

export default Post;
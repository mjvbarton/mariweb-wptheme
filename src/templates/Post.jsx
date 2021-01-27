import axios from 'axios';
import React from 'react';
import PostContainer from '../components/post/PostContainer';
import ReactHtmlParser from 'react-html-parser';
import PostMeta from '../components/post/PostMeta';
import TagLink from '../components/post/TagLink';
import Tags from '../components/post/Tags';
import Footer from './Footer';
import Header from './Header';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount(){
        axios.get('https://wordpress.localhost/wp-json/better-rest-endpoints/v1/posts/29')
        .then((response) => {
            this.setState({
                post: response.data
            });
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div className="mt-10 md:mt-0 md:fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                {this.state.post &&
                    <div className="md:absolute md:z-20 md:mt-32 flex-row space-y-0">                    
                            <main id="post" className="typography light-colors dark:dark-colors md:mx-32 min-h-max px-5 md:px-10 py-5 md:mb-32">                    
                                <h1>{this.state.post.title}</h1>
                                    <PostMeta className="mb-2" author={this.state.post.author_nicename} created={this.state.post.date}/>
                                    {ReactHtmlParser(this.state.post.content)}                                                        
                                    <Tags className="mt-10 text-xs md:text-base">
                                        {this.state.post.tags.map((tag) =>
                                            <TagLink title={tag.name} slug={tag.slug} key={tag.id} />
                                        )}
                                    </Tags>                        
                            </main>                                             
                        <PostContainer id="relatedPosts" title="Související články" className="bg-white h-full py-10 md:px-10"/>                
                        <Footer />                    
                    </div>
                }
            </div>
        );
    }
}

export default Post;
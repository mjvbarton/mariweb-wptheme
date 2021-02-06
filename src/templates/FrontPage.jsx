import axios from 'axios';
import React from 'react';
import PostContainer from '../components/post/PostContainer';
import { BlogContext } from '../context/BlogContext';
import ReactHtmlParser from 'react-html-parser';

/**
 * Represents the front page of the blog
 * @todo Implement call to the API
 * @author mjvbarton
 * @since 1.0.0
 */
class FrontPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: null,
        }
    }
    componentDidMount(){
        let context = this.context;
        console.log(context);
        axios.get(`${context.apiBaseUrl}/better-rest-endpoints/v1/pages/vitejte-na-mem-blogu`)
        .then((response) => {
            if(Array.isArray(response)){
                context.handleError({
                    title: "Stránka nenalezena",
                    description: "Stránka, kterou jste hledali neexistuje."
                });
            }
            this.setState({
                page: response.data
            })
        })
        .catch((error) => {
            console.error(error);
            context.handleError({
                description: "V aplikaci se vyskytla neočekávaná chyba. Zobrazte konzoli pro více informací."
            });
        })
        
    }
    
    render(){
        return(
            <>  
                {this.state.page &&                              
                <section id='frontPage' className='md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 typography dark-colors font-mono text-sm md:text-base font-extralight'>                    
                    <h1 className='text-center font-sans font-light uppercase text-4xl md:text-5xl my-5'>{this.state.page.title}</h1>
                    {this.state.page.blocks && this.state.page.blocks.map((block) => 
                            (block.blockName !== null) ? ReactHtmlParser(block.innerContent) : null                                
                        )}                                      
                </section>    
                }
                {this.state.page &&                
                    <PostContainer id='mainPosts' title='Nejnovější články' className='bg-white h-full py-10 md:px-10' paginate />
                }
            </>
        );
    }
}

FrontPage.contextType = BlogContext;

export default FrontPage;
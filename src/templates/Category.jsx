import React from 'react';
import Header from './Header';
import PostContainer from '../components/post/PostContainer';
import Footer from './Footer';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import PageError from './PageError';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryName: null,
            categoryDescription: null,
            categorySlug: null,
            errorTitle: null,
            errorMessage: null,
        }

        this.loadCategory = this.loadCategory.bind(this);
    }

    componentDidMount(){
        this.loadCategory();
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps.match.params.categorySlug, this.props.match.params.categorySlug);
        if(prevProps.match.params.categorySlug !== this.props.match.params.categorySlug){
            this.setState({
                categoryName: null,
                categoryDescription: null,
                categorySlug: null,
                errorTitle: null,
                errorDescription: null,
                
            }, () => {
                this.loadCategory();
            })
        }
    }

    loadCategory(){
        axios.get('https://wordpress.localhost/wp-json/wp/v2/categories', {
            params: {
                slug: this.props.match.params.categorySlug,                
            }
        })
        .then((response) => {
            if(Array.isArray(response.data) && response.data.length === 1){
                this.setState({
                    categoryName: response.data[0].name,
                    categoryDescription: response.data[0].name,
                    categorySlug: this.props.match.params.categorySlug,
                })
            } else {
                this.setState({
                    errorTitle: "Rubrika nenalezena",
                    errorDescription: "Rubrika, kterou jste hledali neexistuje. Nejspíš jste zadali špatnou adresu."
                })
            }
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div className="mt-10 md:mt-0 md:fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="md:absolute md:z-20 md:mt-32 flex-row space-y-0 min-w-full">
                    {this.state.categoryName &&
                        <main id="category" className="md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 typography dark-colors font-mono text-sm md:text-base font-extralight">                    
                            <h1 className="text-center">{this.state.categoryName}</h1>
                            <section id="description">
                                <h2 className="sr-only">Popis rubriky</h2>
                                <p>
                                    {ReactHtmlParser(this.state.categoryDescription)}                                    
                                </p>
                            </section>                        
                        </main>
                    }
                    {this.state.categorySlug &&
                        <PostContainer id="posts" categorySlug={this.state.categorySlug} paginate title="Nejnovější články v rubrice" className="bg-white h-full py-10 md:px-10"/>
                    }
                    {this.state.errorTitle &&
                        <PageError title={this.state.errorTitle} description={this.state.errorDescription} />
                    }
                    {(this.state.categoryName || this.state.errorTitle) &&
                        <Footer />
                    }
                </div>
            </div>
        );
    }
}

export default Category;
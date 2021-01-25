import React from 'react';
import Header from './Header';
import PostContainer from '../components/post/PostContainer';
import Footer from './Footer';

class Category extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="mt-10 md:mt-0 md:fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="md:absolute md:z-20 md:mt-32 flex-row space-y-0">
                    <main id="category" className="md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 bg-black bg-opacity-80 text-gray-200 font-mono text-sm md:text-base font-extralight">                    
                        <h1 className="text-center font-sans font-light uppercase text-4xl md:text-5xl my-5">Rubrika</h1>
                        <section id="description">
                            <h2 className="sr-only">Popis rubriky</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus enim, bibendum eu neque quis, aliquam tincidunt mi. Vivamus quis hendrerit sapien. Quisque semper mauris ut massa commodo rhoncus. Curabitur nec velit eget augue rhoncus ullamcorper vel id ex. Integer suscipit nisl ac quam vestibulum feugiat. Integer bibendum mauris suscipit aliquet ornare. In vestibulum odio ut tortor malesuada, et porttitor velit imperdiet.
                            </p>
                        </section>                        
                    </main>
                    <PostContainer id="posts" title="Nejnovější články v rubrice" className="bg-white h-full py-10 md:px-10"/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Category;
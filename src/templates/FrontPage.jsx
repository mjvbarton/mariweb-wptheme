import React from 'react';
import PostContainer from '../components/post/PostContainer';
import Footer from './Footer';
import Header from './Header';

class FrontPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="absolute z-20 mt-32 flex-row space-y-0">
                    <main id="category" className="mx-96 px-10 py-5 mb-32 bg-black bg-opacity-80 text-gray-200 font-serif font-extralight">                    
                        <h1 className="text-center font-sans font-light uppercase text-3xl my-5">Uvítací text</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus enim, bibendum eu neque quis, aliquam tincidunt mi. Vivamus quis hendrerit sapien. Quisque semper mauris ut massa commodo rhoncus. Curabitur nec velit eget augue rhoncus ullamcorper vel id ex. Integer suscipit nisl ac quam vestibulum feugiat. Integer bibendum mauris suscipit aliquet ornare. In vestibulum odio ut tortor malesuada, et porttitor velit imperdiet. Duis varius, odio auctor posuere tincidunt, lectus dolor semper odio, vel tempus arcu arcu sit amet quam. 
                        </p>                      
                    </main>
                    <PostContainer id="posts" title="Nejnovější články" className="bg-white h-full p-10"/>
                    <Footer />
                </div>                
            </div>
        );
    }
}

export default FrontPage;
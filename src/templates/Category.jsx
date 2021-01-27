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
                    <main id="category" className="md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 dark-colors font-mono text-sm md:text-base font-extralight">                    
                        <h1 className="text-center font-sans font-light uppercase text-4xl md:text-5xl my-5">Rubrika</h1>
                        <section id="description" className="typography dark-colors">
                            <h2 className="sr-only">Popis rubriky</h2>
                            <p>
                                Jenže <strong>kvůli všudy</strong> <a href="/#">Link</a> <em>přítomné trávě</em> jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
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
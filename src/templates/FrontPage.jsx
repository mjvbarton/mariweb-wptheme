import React from 'react';
import PostContainer from '../components/post/PostContainer';

/**
 * Represents the front page of the blog
 * @todo Implement call to the API
 * @author mjvbarton
 * @since 1.0.0
 */
class FrontPage extends React.Component{
    render(){
        return(
            <>                                
                <section id='frontPage' className='md:mx-auto md:max-w-2xl px-10 py-5 md:mb-32 typography dark-colors font-mono text-sm md:text-base font-extralight'>                    
                    <h1 className='text-center font-sans font-light uppercase text-4xl md:text-5xl my-5'>Uvítací text</h1>
                    <p>
                        Jenže <strong>kvůli všudy</strong> <a href='/#'>Link</a> <em>přítomné trávě</em> jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                    </p>                                       
                </section>    
                <PostContainer id='mainPosts' title='Nejnovější články' className='bg-white h-full py-10 md:px-10' paginate />
            </>
        );
    }
}

export default FrontPage;
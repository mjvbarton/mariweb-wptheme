import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';

class PostSummary extends React.Component{
    render(){
        return(
            <div className="flex flex-wrap md:flex-nowrap items-start my-10">        
                <div className="md:mx-5 justify-self-stretch w-full md:w-1/3 my-3 md:my-0">
                    <img src="https://jordicomas.org/wp-content/uploads/2019/01/Sample-16x9-image_1080px.jpg" alt="heading of article"/>
                </div>    
                <article className="md:mx-5 font-mono font-light w-full md:w-2/3 my-3 md:my-0 px-5 md:px-0">                    
                    <h3 className="text-red-800 font-sans font-medium text-4xl mb-2">
                        <Link to="/clanky/clanek-1" className="hover:text-red-600 hover:underline">Článek 1</Link>
                    </h3>                            
                        <PostMeta className="mb-5"/>       
                        <p className="typography light-colors">
                            Jenže <strong>kvůli všudy</strong> <a href="/#">Link</a> <em>přítomné trávě</em> jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě. Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna včera div nebrečela, že by snad balónky mohly prasknout. A co teprve ta stuha. Stuha, kterou je každý z trojice balónků uvázán, aby se nevypustil. Očividně je uvázaná dostatečně pevně, protože balónky skutečně neucházejí. To ale není nic zvláštního. Překvapit by však mohl fakt, že nikdo, snad krom toho, kdo balónky k obloze vypustil, netuší, jakou má ona stuha barvu.
                            <span className="text-gray-400 mx-1">[...]</span>
                        </p>                                           
                        <Link to="/clanky/clanek-1" className="block my-5 p-3 bg-red-800 text-white max-w-max text-xl font-sans font-medium hover:bg-red-600">Pokračovat ve čtení</Link>                                                                                               
                    </article>
                </div>
        );
    }
}

export default PostSummary;
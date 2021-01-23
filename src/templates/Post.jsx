import React from 'react';
import PostContainer from '../components/post/PostContainer';
import PostMeta from '../components/post/PostMeta';
import TagLink from '../components/post/TagLink';
import Tags from '../components/post/Tags';
import Footer from './Footer';
import Header from './Header';

class Post extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="absolute z-20 mt-32 flex-row space-y-0">
                    <main id="page" className="mx-32 min-h-max px-10 py-5 mb-32 bg-white font-serif font-light">                    
                        <h1 className="text-left font-sans font-medium text-red-800 text-3xl mb-2">Článek</h1>
                            <PostMeta />
                            <p className="my-2">
                                Jenže kvůli všudy <a href="/#" className="font-normal text-red-800 hover:text-red-600 hover:underline">Link</a> přítomné trávě jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě. Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna včera div nebrečela, že by snad balónky mohly prasknout. A co teprve ta stuha. Stuha, kterou je každý z trojice balónků uvázán, aby se nevypustil. Očividně je uvázaná dostatečně pevně, protože balónky skutečně neucházejí. To ale není nic zvláštního. Překvapit by však mohl fakt, že nikdo, snad krom toho, kdo balónky k obloze vypustil, netuší, jakou má ona stuha barvu.
                            </p>
                            <figure className="my-5">
                                <img src="https://jordicomas.org/wp-content/uploads/2019/01/Sample-16x9-image_1080px.jpg" alt="sample"/>
                                <figcaption className="text-sm text-center">Náhodný obrázek z cest</figcaption>
                            </figure>
                            <h2 className="text-left font-sans font-medium text-red-800 text-2xl mt-5 mb-1">Nadpis 2</h2>                        
                            <p className="my-2">
                                Je totiž tak lesklá, že za světla se v ní odráží nebe a za tmy zase není vidět vůbec. Když svítí slunce tak silně jako nyní, tak se stuha třpytí jako kapka rosy a jen málokdo vydrží dívat se na ni přímo déle než pár chvil. Jak vlastně vypadají ony balónky?. Ptají se často lidé. Inu jak by vypadaly - jako běžné pouťové balónky střední velikosti, tak akorát nafouknuté. Červený se vedle modrého a zeleného zdá trochu menší, ale to je nejspíš jen optický klam, a i kdyby byl skutečně o něco málo menší, tak vážně jen o trošičku.
                            </p>
                            <h3 className="text-left font-sans font-medium text-red-800 text-xl mt-5 mb-1">Nadpis 3</h3>                        
                            <p className="my-2">
                                Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky. Jenže kvůli všudy přítomné trávě jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili.
                            </p>       
                            <h4 className="text-left font-sans font-medium text-red-800 text-lg mt-5 mb-1">Nadpis 4</h4>  
                            <p className="my-2">
                                Z fyzikálního pohledu totiž balónky působí zcela nezajímavě. Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna včera div nebrečela, že by snad balónky mohly prasknout. A co teprve ta stuha. Stuha, kterou je každý z trojice balónků uvázán, aby se nevypustil. Očividně je uvázaná dostatečně pevně, protože balónky skutečně neucházejí. To ale není nic zvláštního. Překvapit by však mohl fakt, že nikdo, snad krom toho, kdo balónky k obloze vypustil, netuší, jakou má ona stuha barvu. Je totiž tak lesklá, že za světla se v ní odráží nebe a za tmy zase není vidět vůbec. Když svítí slunce tak silně jako nyní, tak se stuha třpytí jako kapka rosy a jen málokdo vydrží dívat se na ni přímo déle než pár chvil. Jak vlastně vypadají ony balónky?. Ptají se často lidé. Inu jak by vypadaly - jako běžné pouťové balónky střední velikosti, tak akorát nafouknuté.
                            </p>
                            <h2 className="text-left font-sans font-medium text-red-800 text-2xl mt-5 mb-1">Neřazený seznam</h2>
                            <ul className="list-inside list-disc">
                                <li>Položka 1</li>
                                <li>Položka 2</li>
                                <li>Položka 3</li>
                            </ul>
                            <h2 className="text-left font-sans font-medium text-red-800 text-2xl mt-5 mb-1">Řazený seznam</h2>
                            <ol className="list-inside list-decimal">
                                <li>Položka 1</li>
                                <li>Položka 2</li>
                                <li>Položka 3</li>
                            </ol>
                            <Tags className="mt-10">
                                <TagLink title="Štítek 1" slug="stitek-1" />
                                <TagLink title="Štítek 2" slug="stitek-2" />
                                <TagLink title="Štítek 3" slug="stitek-3" />
                                <TagLink title="Štítek 4" slug="stitek-4" />
                            </Tags>                        
                    </main> 
                    <PostContainer id="relatedPosts" title="Související články" className="bg-white h-full p-10"/>                   
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Post;
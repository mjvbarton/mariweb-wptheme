import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SocialSites from '../components/navs/SocialSites';

/**
 * Represents footer of the page
 */
class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-gray-700 text-gray-300 text-xs font-mono font-light z-40 place-self-end">
                <div className="mx-auto py-10 px-5 md:px-0 text-center">
                    <div id="donate" className="mb-10">
                        <h2 className="font-sans font-medium text-2xl text-white">Líbí se vám, co dělám? Podpořte mě!</h2>
                        <p className="text-sm md:text-base">
                            {this.props.donateText}
                        </p>
                        <div id="patreon-button-placeholder" className="p-3 mx-auto my-5 bg-red-500 hover:bg-red-600 hover:text-gray-300 max-w-max text-white font-patreon cursor-pointer">
                            <FontAwesomeIcon icon={faPatreon} className="mr-2"/>
                            Become a Patron!
                        </div> 
                    </div>
                    <hr className="mx-auto max-w-md my-5" />                
                    <SocialSites
                        facebook="example" 
                        instagram="example"
                        pinterest="example" 
                        youtube="example" 
                        soundcloud="example" 
                        twitter="example" 
                        github="example" 
                        email="example@example.com"
                        className="mx-auto max-w-md"
                        titleClass="sr-only"
                        ulClass="flex items-center justify-center"
                        liClass="mx-3 text-lg hover:text-white"
                    />
                    <div id="copyright" className="mt-7 text-xs">
                        <p>
                            &copy; {this.props.copyrightText}
                        </p>
                        <p>
                            S &hearts; vytvořil <a href="https://github.com/mjvbarton" target="__blank" className="hover:text-white hover:underline">mjvbarton</a>.                    
                        </p>
                    </div>
                </div>                
            </footer>
        );
    }
}

Footer.defaultProps = {    
    copyrightText: "2021 Mari Štefanová, Všechna práva vyhrazena.",
    donateText: "Pokud se Vám líbí můj blog, moje fotky nebo mé zpívání, budu moc ráda, když mě podpoříte.",
}

export default Footer;
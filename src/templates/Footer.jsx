import React from 'react';
import PatreonInvoice from '../components/footer/PatreonInvoice';
import SocialSites from '../components/navs/SocialSites';
import { BlogContext } from '../context/BlogContext';

/**
 * Represents footer of the page with copyright and some custom content.
 * @author mjvbarton
 * @since 1.0.0
 * @todo Implement custom content.
 * @todo Implement PropTypes.
 */
class Footer extends React.Component{
    render(){
        let context = this.context;
        return(
            <footer className='bg-gray-700 text-gray-300 text-xs font-mono font-light z-40 place-self-end'>
                <div className='mx-auto py-10 px-5 md:px-0 text-center'>
                    {context.footer.patreon.show &&
                        <>
                            <PatreonInvoice 
                                title={context.footer.patreon.title} 
                                description={context.footer.patreon.description}
                                url={context.footer.patreon.url}
                            />
                            <hr className='mx-auto max-w-md my-5' />   
                        </>
                    }                                                     
                    <SocialSites                       
                        className='mx-auto max-w-md'
                        titleClass='sr-only'
                        ulClass='flex items-center justify-center'
                        liClass='mx-3 text-lg hover:text-white'
                        linkClass='hover:text-white focus:text-white focus:outline-none'
                    />
                    <div id='copyright' className='mt-7 text-xs'>
                        <p>
                            &copy; {context.footer.meta.copyright}
                        </p>
                        <p>
                            S &hearts; vytvořil <a href='https://github.com/mjvbarton' target='__blank' className='hover:text-white hover:underline focus:text-white focus:underline focus:outline-none'>mjvbarton</a>.                    
                        </p>
                    </div>
                </div>                
            </footer>
        );
    }
}

Footer.defaultProps = {    
    copyrightText: '2021 Mari Štefanová, Všechna práva vyhrazena.',
    donateText: 'Pokud se Vám líbí můj blog, moje fotky nebo mé zpívání, budu moc ráda, když mě podpoříte.',
}

Footer.contextType = BlogContext;

export default Footer;
import React from 'react';
import Nav from '../components/navs/Nav';
import {Link} from 'react-router-dom';
import SocialSites from '../components/navs/SocialSites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BlogContext } from '../context/BlogContext';
import SearchBar from '../util/SearchBar';

/**
 * The header of the blog with brand, navigation and social icons.
 * @author mjvbarton
 * @since 1.0.0
 * @todo Implement PropTypes
 */
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMainMenu: false,
            showSearchBar: false,
        };

        this.toggleMainMenu = this.toggleMainMenu.bind(this);
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
    }

    toggleMainMenu(){
        this.setState({
            showSearchBar: false,
            showMainMenu: !this.state.showMainMenu,
        });
    }

    toggleSearchBar(){
        this.setState({
            showSearchBar: !this.state.showSearchBar,
            showMainMenu: false,
        });
    }

    render(){
        
        return(
            <BlogContext.Consumer>
                {blogInfo =>
                    <header id="pageHeader" className='fixed top-0 z-50 w-full'>                        
                        <div className='flex flex-row md:items-center items-start justify-items-stretch w-full md:max-w-7xl mx-auto shadow-lg bg-white md:py-5 py-4 z-30'>
                            <div className='md:flex-none text-4xl mx-5 font-medium text-red-800'>
                                <Link to='/' className='hover:underline focus:underline focus:outline-none'>
                                    {blogInfo.meta.name}
                                </Link>
                            </div>
                            <Nav 
                                id='mainMenu' 
                                title='Hlavní menu' 
                                className={'fixed md:contents top-14 z-10 md:top-0 px-5 md:px-0 mt-4 md:mt-0 bg-gray-800 bg-opacity-90 md:bg-none w-screen md:w-auto md:flex-grow md:mx-5 md:visible ' + (this.state.showMainMenu ? 'visible' : 'invisible')} 
                                titleClass='sr-only' ulClass='flex flex-col md:flex-row md:items-center items-start' 
                                liClass='md:mx-2 my-2 md:my-0 uppercase font-normal text-gray-300 md:text-gray-700 text-2xl'                        
                            >
                                {blogInfo.primaryMenu.map((item) =>                                     
                                    <Link key={item.ID} to={item.url.split(blogInfo.meta.url)[1]} className='hover:text-red-800 hover:underline focus:text-red-800 focus:underline focus:outline-none' >
                                        {item.title}                                        
                                    </Link>
                                )}                                                                
                            </Nav>
                            <div className="flex-grow" />
                            <SearchBar className={"fixed md:relative bg-gray-300 md:bg-transparent min-w-full md:min-w-0 p-5 md:p-0 text-xl md:mx-5 top-16  md:top-0 md:visible " + ((this.state.showSearchBar) ? 'visible' : 'invisible')} forward to="/vyhledat"/>                   
                            <SocialSites                                
                                className='flex-none ml-auto mr-5 invisible md:visible' 
                                titleClass='sr-only' 
                                ulClass='hidden md:flex md:flex-row justify-items-end' 
                                liClass='mx-2 uppercase text-gray-700 text-sm'
                                linkClass='hover:text-red-800 focus:text-red-800 focus:outline-none'
                            />
                            <button id='searchToggle' className='md:hidden mx-2 text-gray-800 border-gray-800 bg-200 border-solid border rounded-sm shadow py-1 px-3 text-2xl'>
                                <FontAwesomeIcon icon={faSearch} onClick={this.toggleSearchBar}/>
                                <span className='sr-only'>Zobrazit/skrýt hlavní menu</span>
                            </button>
                            <button id='mainMenuToggle' className='md:hidden ml-2 mr-7 text-gray-800 border-gray-800 bg-200 border-solid border rounded-sm shadow py-1 px-3 text-2xl'>
                                <FontAwesomeIcon icon={this.state.showMainMenu ? faCaretUp : faCaretDown} onClick={this.toggleMainMenu}/>
                                <span className='sr-only'>Zobrazit/skrýt hlavní menu</span>
                            </button>
                        </div>
                    </header>
            }
            </BlogContext.Consumer>
        );
    }
}

export default Header;
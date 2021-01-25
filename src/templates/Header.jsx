import React from 'react';
import Nav from '../components/navs/Nav';
import {Link} from 'react-router-dom';
import SocialSites from '../components/navs/SocialSites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMainMenu: false,
        };

        this.toggleMainMenu = this.toggleMainMenu.bind(this);
    }

    toggleMainMenu(){
        this.setState({
            showMainMenu: !this.state.showMainMenu,
        });
    }

    render(){
        
        return(
            <header className="fixed top-0 z-50 w-full">
                <div className="flex flex-row md:items-center items-start justify-items-stretch w-full md:max-w-7xl mx-auto shadow-lg bg-white md:py-5 py-4 z-30">
                    <div className="md:flex-none text-4xl mx-5 font-medium text-red-800">
                        <Link to="/">Jmenuji se Mari</Link>
                    </div>
                    <Nav 
                        id="mainMenu" 
                        title="Hlavní menu" 
                        className={"fixed md:contents top-14 z-10 md:top-0 px-5 md:px-0 mt-4 md:mt-0 bg-gray-800 bg-opacity-90 md:bg-none w-screen md:w-auto md:flex-grow md:mx-5 md:visible " + (this.state.showMainMenu ? "visible" : "invisible")} 
                        titleClass="sr-only" ulClass="flex flex-col md:flex-row md:items-center items-start" 
                        liClass="md:mx-2 my-2 md:my-0 uppercase font-normal text-gray-300 md:text-gray-700 text-2xl hover:text-red-800 hover:underline"                        
                    >
                        <Link to="/">Domů</Link>
                        <Link to="/rubriky/rubrika-1">Rubrika 1</Link>
                        <Link to="/rubriky/rubrika-2">Rubrika 2</Link>
                        <Link to="/rubriky/rubrika-3">Rubrika 3</Link>
                        <Link to="/rubriky/rubrika-4">Rubrika 4</Link>
                        <Link to="/o-mne">O mně</Link>
                        <Link to="/kontakt">Kontakt</Link>
                    </Nav>                    
                    <SocialSites
                        facebook="example" 
                        instagram="example"
                        pinterest="example" 
                        youtube="example" 
                        soundcloud="example" 
                        twitter="example" 
                        github="example" 
                        email="example@example.com"
                        className="flex-none ml-auto mr-5 invisible md:visible" 
                        titleClass="sr-only" 
                        ulClass="hidden md:flex md:flex-row justify-items-end" 
                        liClass="mx-2 uppercase text-gray-700 text-sm hover:text-red-800"
                    />
                    <button id="mainMenuToggle" className="md:hidden mx-7 text-gray-800 border-gray-800 bg-200 border-solid border rounded-sm shadow py-1 px-3 text-2xl">
                        <FontAwesomeIcon icon={this.state.showMainMenu ? faCaretUp : faCaretDown} onClick={this.toggleMainMenu}/>
                        <span className="sr-only">Zobrazit/skrýt hlavní menu</span>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
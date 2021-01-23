import React from 'react';
import Nav from '../components/navs/Nav';
import {Link} from 'react-router-dom';
import SocialSites from '../components/navs/SocialSites';

class Header extends React.Component{
    render(){
        return(
            <header className="fixed z-50 w-full">
                <div className="flex items-center justify-items-stretch max-w-7xl mx-auto shadow-lg bg-white py-5">
                    <div className="flex-none text-xl mx-5 font-medium text-red-800">
                        <Link to="/">Jmenuji se Mari</Link>
                    </div>
                    <Nav title="Hlavní menu" className="flex-grow mx-5" titleClass="sr-only" ulClass="flex items-center" liClass="mx-2 uppercase text-gray-700 text-sm hover:text-red-800 hover:underline">
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
                        className="flex-none mx-5" 
                        titleClass="sr-only" 
                        ulClass="flex justify-items-end" 
                        liClass="mx-2 uppercase text-gray-700 text-sm hover:text-red-800"
                    />
                </div>
            </header>
        );
    }
}

export default Header;
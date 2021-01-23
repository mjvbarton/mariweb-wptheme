import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class PostMeta extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                <ul className="flex items-center text-gray-500 font-serif font-light text-sm">
                    <li className="mx-3">
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Autor:</span>
                        Administrator
                    </li>
                    <li className="mx-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Datum vytvoření:</span>
                        <time>22. 1. 2021</time>
                    </li>
                    <li className="mx-3">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Čas vytvoření:</span>
                        <time>12:54</time>
                    </li>                    
                </ul>                
            </div>
        );
    }
}

export default PostMeta;
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class PostMeta extends React.Component{
    formatDate(date){             
        return date.toLocaleDateString('cs', {day: 'numeric', month: 'long', year: 'numeric'});
    }

    formatTime(date){
        let theDate = new Date(date);
        return theDate.toLocaleTimeString('cs', {hour: 'numeric', minute: 'numeric'});
    }

    render(){
        return(
            <header className={this.props.className}>
                <ul className="md:flex md:items-center text-gray-500 font-mono font-light text-xs md:text-sm">
                    <li className="my-1 md:my-0 mx-3">
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Autor:</span>
                        {this.props.author}
                    </li>
                    <li className="my-1 md:my-0 mx-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Datum vytvoření:</span>
                        <time>{this.formatDate(this.props.created)}</time>
                    </li>
                    <li className="my-1 md:my-0 mx-3">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400"/>
                        <span className="sr-only">Čas vytvoření:</span>
                        <time>{this.formatTime(this.props.created)}</time>
                    </li>                    
                </ul>                
            </header>
        );
    }
}

PostMeta.propTypes = {
    
}

PostMeta.defaultProps = {
    author: "The Author",
    created: new Date(),
}

export default PostMeta;
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

class TagLink extends React.Component{
    render(){
        return(
            <Link to={`/stitky/${this.props.slug}`}>
                <FontAwesomeIcon icon={faHashtag} className="mr-1" />
                {this.props.title}
            </Link>
        );
    }
}

export default TagLink;
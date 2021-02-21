import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { Redirect, withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = (e) => {            
            this.setState({                
                query: e.target.value,                             
            });
        }
        
        this.handleButtonClick = (e) => {                
            this.queryInput.current.focus();                                            
        }

        this.getQueryParams = (query) => {            
            let queryString = qs.parse(window.location.search, {ignoreQueryPrefix: true});
            queryString.q = query;
            return(qs.stringify(queryString));
        }

        this.handleSubmit = (e) => {
            e.preventDefault();          
            if(this.state.query.length !== 0){
                this.props.history.push(this.props.to + '?' + qs.stringify({
                    q: this.state.query
                }), {
                    referrer: this.props.location.pathname
                });
                this.reset();
            }              
        };

        this.reset = () => {
            this.queryInput.current.blur();
            this.setState({
                query: ''
            })
        };

        this.queryInput = React.createRef();

        this.state = {
            query: '',                        
            forward: false,
        }
    }

    render(){
        return(
            <div className={this.props.className}>
                <form action="/" onSubmit={this.handleSubmit} noValidate autoComplete="off" 
                    className="flex border-b border-gray-400 focus-within:border-red-800 text-gray-600 focus-within:text-red-800"
                >      
                    <label htmlFor="queryInput">
                        <span className="sr-only">Hledaný text:</span>                        
                    </label>                               
                    <input 
                        id="queryInput"
                        name="q"
                        type="text" 
                        placeholder="Vyhledávání" 
                        onChange={this.handleChange}
                        ref={this.queryInput}
                        value={this.state.query}
                        className="flex-grow font-sans text-2xl focus:outline-none placeholder-black focus:placeholder-red-800 bg-transparent"                        
                    />                                                                       
                    <button type="submit" className="text-sm focus:outline-none" onClick={this.handleButtonClick}>                            
                        <FontAwesomeIcon icon={faSearch}/>
                        <span className="sr-only">Vyhledat</span>
                    </button>                    
                    {this.state.forward &&                        
                        <Redirect to={{
                            pathname: this.props.to,
                            search: qs.stringify({
                                q: encodeURIComponent(this.state.query),
                            }),
                            state: {
                                referrer: window.location.pathname
                            }
                        }}
                        />
                    }
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    forward: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,    
    to: PropTypes.string,
};

SearchBar.defaultProps = {
    onSubmit: (query) => {}
};

export default withRouter(SearchBar);
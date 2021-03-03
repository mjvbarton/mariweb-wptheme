import React from 'react';

/**
 * Represents the main navigation bar.
 * @author mjvbarton
 * @since 1.0.0
 */
class Nav extends React.Component{    
    render(){        
        let counter = 0;
        return(
            <nav id="#primaryMenu" className={this.props.className}>
                <h2 className={this.props.titleClass}>{this.props.title}</h2>
                <ul className={this.props.ulClass}>
                    {this.props.children && Array.isArray(this.props.children) && this.props.children.map((child) => {
                        counter++;
                        return (child) ?
                        <li className={this.props.liClass} key={counter}>
                            {child}
                        </li>
                        : null
                    })}
                    {this.props.children && !Array.isArray(this.props.children) &&
                        <li className={this.props.liClass} key={counter}>
                            {this.props.children}
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}

export default Nav;
import React from 'react';

/**
 * Represents the main navigation bar.
 * @author mjvbarton
 * @since 1.0.0
 */
class Nav extends React.Component{
    render(){
        return(
            <nav className={this.props.className}>
                <h2 className={this.props.titleClass}>{this.props.title}</h2>
                <ul className={this.props.ulClass}>
                    {this.props.children && this.props.children.map((child) => (child) ?
                        <li className={this.props.liClass} key={this.props.children.indexOf(child)}>
                            {child}
                        </li>
                        : null
                    )}
                </ul>
            </nav>
        );
    }
}

export default Nav;
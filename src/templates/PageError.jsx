import React from 'react';

class PageError extends React.Component{
    render(){
        return( 
            <main id="error" className="typography md:mx-auto md:max-w-2xl px-10 py-20 md:mb-32 dark-colors font-mono text-sm md:text-base font-extralight">
                <h1 className="text-center">{this.props.title}</h1>
                <p className="text-center">{this.props.description}</p>
            </main>
        )
    }
}

export default PageError;
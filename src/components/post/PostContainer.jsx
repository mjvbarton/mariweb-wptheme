import React from 'react';
import PostSummary from './PostSummary';

class PostContainer extends React.Component{
    render(){
        return(
            <aside id={this.props.id} className={this.props.className}>
                <h2 className="font-sans font-normal text-3xl text-red-800 text-center">{this.props.title}</h2>
                <PostSummary />
                <PostSummary />
                <PostSummary />
                <PostSummary />                
            </aside>
        );
    }
}

export default PostContainer;
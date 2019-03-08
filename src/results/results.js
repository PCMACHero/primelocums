import React from 'react'
import './results.css'
import { jobPosts } from '../helpers/dummydata';

export default class Results extends React.Component{
    state={
        posts:[]
    }
    posts = jobPosts

    makePostDivs=(posts)=>{
        let divs = []
        for (let i =0; i<posts.length; i++){
            let short = posts[i].description.replace(/(.{250})..+/, "$1…");
            divs.push(
            <div className="post" key={i}>
                <div className="post-and-button">
                    <div className="post-title">{posts[i].title}</div>
                    <button className="post-view-more">View More</button>
                </div>
                
                <div className="short-description">{short}</div>
                

            </div>)
        } 
        this.setState({
            posts:divs
        })
    }

    componentDidMount(){
        this.makePostDivs(this.posts)
    }
    render(){
        
        return (
            <div className="results">
            {this.state.posts}
        </div>
        )
        
    }
}
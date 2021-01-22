import React, { Component } from 'react';
import '../libraries/fontawesome.js';
import '../_styles/posts.css';
import Context from '../Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {faHeartbeat, faPodcast, faBookOpen, faSeedling } from '@fortawesome/free-solid-svg-icons';

class SinglePost extends Component{
    static contextType=Context;
    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
      }
    render(){
        const{ post_type, title, by, link, content, username} = this.props;
        
        let listItem ='';
        let uploadedImage ='';        
        let icon ='';

        if(post_type==='lifestyle'){
            icon = faHeartbeat
        }
        else if(post_type==='event'){
            icon = faCalendarAlt
        }
        else if(post_type==='recipe'){
            icon = faSeedling
        }
        else if(post_type==='podcast'){
            icon = faPodcast
        }
        else if(post_type==='book'){
            icon = faBookOpen
        }
  
        listItem = (<li className='single-post' key={this.props.post_id}>
               <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={icon} /></span>
                    <div className="user-info">
                    <span className="post-span post-username">{username}</span> 
                    </div> 
                    {uploadedImage}  
                    {title ? <span className="post-span post-title">{title}</span> :""}
                    {by ? <span className="post-span post-artist">{by}</span> :""}
                    {content ? <span className="post-span post-content">{content}</span> :""}
                    {link ? <span className="post-span post-link"><a href={link}>Learn More</a></span> : ""}
                    
                </div>
                <div className="post-icons-buttons">
              
                </div>
                
                
            </li>)
    
        return(listItem)    
}
}
export default SinglePost;
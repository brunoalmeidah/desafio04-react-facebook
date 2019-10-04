import React from 'react';
import Comment from './Comment';

function Post({data}){
  return (
      <div className="post">
        <div className="post-header">
          <img src={data.author.avatar} alt="" className="profile-avatar"/>
          <div>
            <span className="profile-name">{data.author.name}</span>
            <span className="post-date" >{data.date}</span>
          </div>
        </div>
        <div className="post-body">
          <p> 
            {data.content}
          </p>
        </div>
        {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
    
      </div>
      );
}

export default Post;
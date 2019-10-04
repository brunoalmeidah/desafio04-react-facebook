import React from 'react';

function Comment({data}){
  return (
    <div className="comment">
      <img src={data.author.avatar} className="profile-avatar"/>
      <div>
         <p>
          <strong>{data.author.name}</strong>
          {data.content}
         </p> 
      </div>
    </div>

  );
}

export default Comment;
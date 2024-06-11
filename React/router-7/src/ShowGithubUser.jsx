import React from 'react';

function ShowGithubUser({match}) {
    const{username}=match.params;

    return(
        <div>
      <h2>User: {username}</h2>
    </div>

    )
}

export default ShowGithubUser
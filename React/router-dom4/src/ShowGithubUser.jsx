import React from 'react';
import {useParams} from 'react-router-dom';
import GitHubUser from './GitHubUser';

function ShowGithubUser() {

    const{username}=useParams();

    return <GitHubUser username={username} />
}

export default ShowGithubUser